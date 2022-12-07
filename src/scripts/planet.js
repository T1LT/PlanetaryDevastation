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
    this.type = options.type;
  }

  collideWith(otherObj) {
    this.consumes(otherObj);
    this.game.remove(otherObj);
  }
}
