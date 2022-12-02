import Asteroid from "./asteroid";

export default class Game {
  constructor(canvas) {
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.NUM_OBJECTS = 100;
    this.objects = [];
    this.addObjects();
  }

  addObjects() {
    while (this.objects.length < this.NUM_OBJECTS) {
      const asteroid = new Asteroid({
        pos: this.randomPosition(),
        game: this,
      });
      this.objects.push(asteroid);
    }
  }

  randomPosition() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.objects.forEach((object) => {
      object.draw(ctx);
    });
  }

  moveObjects() {
    this.objects.forEach((object) => {
      object.move();
      object.pos = this.wrap(object.pos);
    });
  }

  checkCollisions() {
    for (let i = 1; i < this.objects.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.objects[i].isCollidedWith(this.objects[j])) {
          this.objects[i].collideWith(this.objects[j]);
          break;
        }
      }
    }
  }

  remove(obj) {
    this.objects.splice(this.objects.indexOf(obj), 1);
  }

  step() {
    this.checkCollisions();
    this.moveObjects();
  }

  start(ctx) {
    setInterval(() => {
      this.step();
      this.draw(ctx);
    }, 20);
  }

  wrap(pos) {
    let res = [pos[0], pos[1]];
    if (pos[0] < 0) {
      res[0] = this.DIM_X;
    } else if (pos[0] > this.DIM_X) {
      res[0] = 0;
    }
    if (pos[1] < 0) {
      res[1] = this.DIM_Y;
    } else if (pos[1] > this.DIM_Y) {
      res[1] = 0;
    }
    return res;
  }
}
