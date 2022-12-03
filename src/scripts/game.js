import Asteroid from "./asteroid";
import BlackHole from "./blackhole";

export default class Game {
  constructor(canvas) {
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.NUM_OBJECTS = 200;
    this.objects = [];
    this.addObjects();
    this.running = true;
  }

  addObjects() {
    while (this.objects.length < this.NUM_OBJECTS) {
      const asteroid = new Asteroid({
        pos: this.randomPosition(),
        game: this,
      });
      this.objects.push(asteroid);
    }
    const blackhole = new BlackHole({
      pos: [this.DIM_X / 2, this.DIM_Y / 2],
      game: this,
    });
    this.objects.push(blackhole);
  }

  randomPosition() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    // const blackhole = this.objects[this.objects.length - 1];
    // ctx.scale(20 / blackhole.radius, 20 / blackhole.radius);
    this.objects.forEach((object) => {
      object.draw(ctx);
    });
  }

  moveObjects() {
    this.objects.forEach((object) => {
      if (!(object instanceof BlackHole)) {
        object.move();
        object.pos = this.wrap(object.pos);
      }
    });
  }

  checkCollisions() {
    for (let i = 1; i < this.objects.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.objects[i].isCollidedWith(this.objects[j])) {
          if (this.objects[i].radius >= this.objects[j].radius) {
            this.objects[i].collideWith(this.objects[j]);
          } else {
            if (this.objects[i] instanceof BlackHole) {
              this.running = false;
            }
            this.objects[j].collideWith(this.objects[i]);
          }
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

  start(ctx, mousePos) {
    const blackhole = this.objects[this.objects.length - 1];
    this.step();
    if (blackhole instanceof BlackHole) {
      blackhole.update(mousePos);
    }
    this.draw(ctx);
    if (this.running) {
      requestAnimationFrame(this.start.bind(this, ctx, mousePos));
    } else {
      ctx.font = "48px sans-serif";
      ctx.fillStyle = "#FF0000";
      ctx.fillText("GAME OVER", this.DIM_X / 2 - 150, this.DIM_Y / 2);
    }
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
