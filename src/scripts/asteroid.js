import MovingObject from "./moving_object";
const Utils = require("./utils");

export default class Asteroid extends MovingObject {
  constructor(options) {
    super({
      pos: options.pos,
      vel: Utils.randomVec(0.025),
      radius: options.radius,
      game: options.game,
    });
  }

  collideWith(otherObj) {
    this.consumes(otherObj);
    this.game.remove(otherObj);
  }
}
