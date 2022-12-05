import Asteroid from "./asteroid";
const Utils = require("./utils");
const blackholeImg = new Image();
blackholeImg.src = "./assets/blackhole1.png";
const planets = [];
for (let i = 0; i <= 6; i++) {
  planets.push(new Image());
  planets[i].src = `./assets/planet${i}.png`;
}

export default class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game = options.game;
    this.image = this.getImage();
  }

  draw(ctx, scale) {
    if (this instanceof Asteroid) {
      // let posX = this.pos[0] - this.radius * scale;
      let posX = this.pos[0] - this.radius;
      // let posY = this.pos[1] - this.radius * scale;
      let posY = this.pos[1] - this.radius;
      ctx.drawImage(
        this.image,
        posX,
        posY,
        // this.radius * 2 * scale,
        this.radius * 2,
        // this.radius * 2 * scale
        this.radius * 2
      );
    } else {
      let posX = this.pos[0] - this.radius * 2;
      let posY = this.pos[1] - this.radius * 2;
      ctx.drawImage(this.image, posX, posY, this.radius * 4, this.radius * 4);
    }
    // see hitboxes - debug mode
    // ctx.fillStyle = "white";
    // ctx.globalAlpha = 0.5;
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    // ctx.fill();
  }

  scaleRadius(scale) {
    this.radius *= scale;
  }

  getImage() {
    if (this instanceof Asteroid) {
      let idx = Math.floor(Math.random() * 7);
      return planets[idx];
    } else {
      return blackholeImg;
    }
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  isCollidedWith(otherObj) {
    return (
      Utils.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius
    );
  }

  consumes(otherObj) {
    const sumOfAreas =
      Math.PI * this.radius ** 2 + Math.PI * otherObj.radius ** 2;
    // if (this instanceof Asteroid) {
    this.radius = Math.sqrt(sumOfAreas / Math.PI);
    // }
  }
}
