import Asteroid from "./asteroid";
const Utils = require("./utils");
const blackholeImg = new Image();
blackholeImg.src = "./assets/blackhole.png";
const planets = [];
for (let i = 0; i <= 7; i++) {
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

  draw(ctx) {
    let posX = this.pos[0] - this.image.width / 2;
    let posY = this.pos[1] - this.image.height / 2;
    ctx.drawImage(this.image, posX, posY, this.radius * 2, this.radius * 2);
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    // ctx.fill();
  }

  getImage() {
    if (this instanceof Asteroid) {
      let idx = Math.floor(Math.random() * 8);
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
    this.radius = Math.sqrt(sumOfAreas / Math.PI);
  }
}
