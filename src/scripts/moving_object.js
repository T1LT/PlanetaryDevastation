import Planet from "./planet";
const Utils = require("./utils");
const blackholeImg = new Image();
blackholeImg.src = "./assets/blackhole2.png";
const planets = [];
for (let i = 0; i <= 6; i++) {
  planets.push(new Image());
  planets[i].src = `./assets/planet${i}.png`;
}
const bossImg = new Image();
bossImg.src = "./assets/planet7.png";

export default class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game = options.game;
    this.image = this.getImage();
  }

  draw(ctx, scale) {
    if (this instanceof Planet) {
      let posX = this.pos[0] - this.radius * scale;
      // let posX = this.pos[0] - this.radius;
      let posY = this.pos[1] - this.radius * scale;
      // let posY = this.pos[1] - this.radius;
      ctx.drawImage(
        this.image,
        posX,
        posY,
        this.radius * 2 * scale,
        // this.radius * 2,
        this.radius * 2 * scale
        // this.radius * 2
      );
    } else {
      let posX = this.pos[0] - this.radius * 4;
      let posY = this.pos[1] - this.radius * 4;
      ctx.drawImage(this.image, posX, posY, this.radius * 8, this.radius * 8);
    }
    // DEBUG MODE - SEE HITBOXES
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
    if (this instanceof Planet) {
      if (this.type === "planet") {
        let idx = Math.floor(Math.random() * 7);
        return planets[idx];
      } else if (this.type === "boss") {
        return bossImg;
      }
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
    if (this instanceof Planet) {
      this.radius = Math.sqrt(sumOfAreas / Math.PI);
    } else if (!(this instanceof Planet) && this.radius > 80) {
      this.radius = 0.9 * Math.sqrt(sumOfAreas / Math.PI);
    } else if (!(this instanceof Planet)) {
      this.radius = Math.sqrt(sumOfAreas / Math.PI);
    }
  }
}
