import Asteroid from "./asteroid";

const Utils = require("./utils");
export default class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game = options.game;
  }

  draw(ctx) {
    if (this instanceof Asteroid) ctx.fillStyle = "white";
    else ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
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
    const sumOfAreas = Math.PI * this.radius ** 2 + Math.PI * otherObj.radius ** 2;
    this.radius = Math.sqrt(sumOfAreas / Math.PI);
  }
}
