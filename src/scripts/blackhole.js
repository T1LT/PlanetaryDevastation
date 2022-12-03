import MovingObject from "./moving_object";
const Utils = require("./utils");

export default class BlackHole extends MovingObject {
  constructor(options) {
    super({
      pos: options.pos,
      vel: [0, 0],
      radius: 20,
      game: options.game,
    });
  }

  collideWith(otherObj) {
    this.consumes(otherObj);
    this.game.remove(otherObj);
  }

  update(mousePos) {
    let vel = [...mousePos];
    if (mousePos[0] !== this.pos[0] && mousePos[1] !== this.pos[1]) {
      vel[0] -= this.pos[0];
      vel[1] -= this.pos[1];
      vel = Utils.setMag(vel, 0.5);
      if (this.pos[0] + vel[0] >= 0 && this.pos[1] + vel[1] >= 0) {
        this.pos[0] += vel[0];
        this.pos[1] += vel[1];
      }
    }
  }
}
