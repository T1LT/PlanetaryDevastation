import MovingObject from "./moving_object";
const Utils = require("./utils");

export default class Planet extends MovingObject {
  constructor(options) {
    super({
      pos: options.pos,
      vel: Utils.randomVec(0.025),
      radius: options.radius,
      game: options.game,
    });
  }

  collideWith(otherObj, scale) {
    this.consumes(otherObj);
    // this.radius *= scale;
    this.game.remove(otherObj);
  }
}
