import MovingObject from "./moving_object";
const Utils = require("./utils");

export default class Asteroid extends MovingObject {
  constructor(options) {
    super({
      pos: options.pos,
      vel: Utils.randomVec(0.5),
      radius: 20,
      game: options.game,
    });
  }

  collideWith(otherObj) {
    this.consumes(otherObj);
    this.game.remove(otherObj);
  }
}
