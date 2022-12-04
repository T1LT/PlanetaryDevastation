import Asteroid from "./asteroid";
import BlackHole from "./blackhole";
const background = new Image();
background.src = "./assets/background.png";

export default class Game {
  constructor(canvas, mousePos) {
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.ctx = canvas.getContext("2d");
    this.mousePos = mousePos;
    this.NUM_OBJECTS = 15;
    this.objects = [];
    this.addObjects();
    this.running = true;
    this.paused = false;
    this.registerPause();
  }

  addObjects() {
    while (this.objects.length < this.NUM_OBJECTS) {
      const asteroid = new Asteroid({
        pos: this.randomPosition(),
        // Math.random() * (max - min) + min
        radius: Math.floor(Math.random() * (30 - 15) + 15),
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
    ctx.drawImage(background, 0, 0, this.DIM_X, this.DIM_Y);
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
    if (this.objects.length <= 5) {
      let x = 3;
      const blackhole = this.objects[this.objects.length - 1];
      while (x--) {
        const asteroid = new Asteroid({
          pos: this.randomPosition(),
          radius: Math.floor(Math.random() * (30 - 15) + 15),
          game: this,
        });
        if (!asteroid.isCollidedWith(blackhole)) {
          this.objects.unshift(asteroid);
        }
      }
    }
  }

  step() {
    this.checkCollisions();
    this.moveObjects();
  }

  start() {
    const blackhole = this.objects[this.objects.length - 1];
    this.step();
    if (blackhole instanceof BlackHole) {
      blackhole.update(this.mousePos);
    }
    this.draw(this.ctx);
    if (this.running && !this.paused) {
      requestAnimationFrame(this.start.bind(this));
    } else if (!this.running) {
      this.ctx.font = "48px andale mono";
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillText("GAME OVER", this.DIM_X / 2 - 130, this.DIM_Y / 2);
    } else if (this.paused) {
      this.ctx.font = "48px andale mono";
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillText("PAUSED", this.DIM_X / 2 - 85, this.DIM_Y / 2);
    }
  }

  click(e) {
    this.paused = !this.paused;
    if (!this.paused) {
      this.start();
    }
  }

  registerPause() {
    window.addEventListener("mousedown", this.click.bind(this));
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
