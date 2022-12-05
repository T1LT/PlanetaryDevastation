import Planet from "./planet";
import BlackHole from "./blackhole";
import Timer from "./timer";
const background = new Image();
background.src = "./assets/background.png";

export default class Game {
  constructor(canvas, mousePos) {
    this.canvas = canvas;
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.ctx = canvas.getContext("2d");
    this.mousePos = mousePos;
    this.NUM_OBJECTS = 15;
    this.objects = [];
    this.addObjects();
    this.scale = 1;
    this.started = false;
    this.running = true;
    this.paused = true;
    this.registerPause();
    this.timer = new Timer();
    this.score = 0;
  }

  addObjects() {
    while (this.objects.length < this.NUM_OBJECTS) {
      const planet = new Planet({
        pos: this.randomPosition(),
        // Math.random() * (max - min) + min
        radius: Math.floor(Math.random() * (30 - 15) + 15),
        game: this,
      });
      this.objects.push(planet);
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
    this.objects.forEach((object) => {
      object.draw(ctx, this.scale);
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
    // use min heap / distance matrix for optimizing this
    for (let i = 1; i < this.objects.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.objects[i].isCollidedWith(this.objects[j])) {
          if (this.objects[i].radius >= this.objects[j].radius) {
            // if the blackhole eats a planet, reduce the scale
            if (
              this.objects[i] instanceof BlackHole &&
              this.objects[i].radius > 80
            ) {
              this.scale -= this.scale / (4 * this.objects[i].radius);
              this.scaleHitboxes();
            }
            this.objects[i].collideWith(this.objects[j], this.scale);
          } else {
            if (this.objects[i] instanceof BlackHole) {
              this.score = this.objects[i].score;
              // this.timer.endTimer()
              this.running = false;
            }
            this.objects[j].collideWith(this.objects[i]);
          }
          break;
        }
      }
    }
  }

  scaleHitboxes() {
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].scaleRadius(this.scale);
    }
  }

  remove(obj) {
    this.objects.splice(this.objects.indexOf(obj), 1);
    if (this.objects.length <= 5) {
      let x = 3;
      const blackhole = this.objects[this.objects.length - 1];
      while (x--) {
        const planet = new Planet({
          pos: this.randomPosition(),
          radius:
            Math.floor(Math.random() * (blackhole.radius - 30) + 15) *
            this.scale,
          game: this,
        });
        if (!planet.isCollidedWith(blackhole)) {
          this.objects.unshift(planet);
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
    this.addGameDetails();
    if (this.running && !this.paused && this.started) {
      this.timer.startTimer();
      requestAnimationFrame(this.start.bind(this));
    } else if (!this.running) {
      this.addGameOverText();
      this.timer.started = false;
      this.timer.time = "00:00";
      this.timer.startTime = new Date();
      this.timer.endTimer();
    } else if (this.paused && this.started) {
      this.addPausedText();
    } else if (!this.started) {
      this.addLandingText();
    }
  }

  addGameDetails() {
    this.ctx.font = "18px andale mono";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(
      this.timer.time,
      this.DIM_X / 2 - 80,
      this.DIM_Y / 2 - 320
    );
    this.ctx.fillText(
      `SCORE: ${this.objects[this.objects.length - 1].score || this.score}`,
      this.DIM_X / 2,
      this.DIM_Y / 2 - 320
    );
  }

  addGameOverText() {
    this.ctx.font = "48px andale mono";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("GAME OVER", this.DIM_X / 2 - 130, this.DIM_Y / 2);
    this.ctx.font = "18px andale mono";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `SCORE: ${this.objects[this.objects.length - 1].score || this.score}`,
      this.DIM_X - 980,
      this.DIM_Y / 2 + 40
    );
    this.ctx.fillText(
      "Click to Restart",
      this.DIM_X - 1020,
      this.DIM_Y / 2 + 70
    );
  }

  addPausedText() {
    this.ctx.font = "48px andale mono";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("PAUSED", this.DIM_X / 2 - 85, this.DIM_Y / 2);
  }

  addLandingText() {
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.ctx.font = "48px andale mono";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("CLICK TO START", this.DIM_X / 2 - 200, this.DIM_Y / 2);
    this.ctx.font = "18px andale mono";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Move your mouse around to eat planets",
      this.DIM_X - 1130,
      this.DIM_Y / 2 + 100
    );
    this.ctx.fillText(
      "Click anywhere to pause",
      this.DIM_X - 1055,
      this.DIM_Y / 2 + 150
    );
  }

  click(e) {
    if (!this.started) {
      this.started = true;
      this.start();
    }
    if (this.running) {
      this.paused = !this.paused;
    }
    if (!this.paused) {
      this.start();
    }
    if (!this.running && !this.paused && this.started) {
      this.objects = [];
      this.addObjects();
      this.running = true;
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
