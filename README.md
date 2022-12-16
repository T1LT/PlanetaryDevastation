# [Planetary Devastation](https://t1lt.github.io/PlanetaryDevastation/)

## Overview

You start off as a tiny black hole in Outer Space. Consume other planets to grow bigger. Planets and bosses that spawn in are generated based on your radius, which means that growing too big is a disadvantage. Once you get big enough, try to maintain a balance growing too big and being too small. Bosses spawn in every 45 seconds, keep an eye out for them! Try to stay alive as long as you can while fighting bosses.

## How to Play
On the landing page, click to start the game. Once the game starts, you can move your mouse around to guide the Black Hole. You can consume planets that have a radius smaller than or equal to your radius. After you get to a certain size, consuming smaller planets reduces your size. Use this to maintain your size. Your score indicates the number of planets you consumed. Click to pause/unpause the game when it is running. Click to restart the game if you lose.

## Functionality

In Planetary Devastation, the users will be able to:

- Make the black hole follow the cursor
- Feed other planets to the black hole
- See different kinds of planetary bodies
- Listen to the soundtrack of the game while playing

## Layouts

### Landing Page

![Screen Shot 2022-12-07 at 12 16 03 PM](https://user-images.githubusercontent.com/65653163/206299128-a7f78163-d547-40ce-93df-d7d1119b021c.png)

### Gameplay

![Screen Shot 2022-12-07 at 12 17 12 PM](https://user-images.githubusercontent.com/65653163/206299179-f4147948-4f75-40f1-b6fc-4d116d89ebd7.png)

#### Boss Fight
![Screen Shot 2022-12-07 at 12 22 45 PM](https://user-images.githubusercontent.com/65653163/206299233-f6abe6d4-cfd3-49ca-92a7-14baa0167c7d.png)

#### Pause Screen
![Screen Shot 2022-12-07 at 1 24 03 PM](https://user-images.githubusercontent.com/65653163/206299405-65b743f6-3f53-4539-b6e2-501a43c15a7b.png)

#### Game Over Screen
![Screen Shot 2022-12-07 at 1 24 41 PM](https://user-images.githubusercontent.com/65653163/206299523-0988d1ae-1709-4b36-99e9-cb7f55d858d2.png)

#### Blackhole
![tabicon](https://user-images.githubusercontent.com/65653163/206314917-185f369c-c233-46fa-abb4-f0362d576585.png)

#### Planets
![planet1](https://user-images.githubusercontent.com/65653163/206314934-0e1c3d27-a1d7-454c-b8e5-35346b130447.png)
![planet0](https://user-images.githubusercontent.com/65653163/206314939-eafb2191-4b81-48ee-85ab-dedd12f2bfd4.png)
![planet3](https://user-images.githubusercontent.com/65653163/206314956-c7cd482f-c9ee-4c46-b6ee-f8ce9ce41ddd.png)
![planet5](https://user-images.githubusercontent.com/65653163/206314964-c53bfde7-2cb9-40b6-82b4-52e3471fcb85.png)
![planet6](https://user-images.githubusercontent.com/65653163/206314969-9a7d8b7d-4e17-458f-a14b-8f8e6126d373.png)

#### Bosses
![boss1](https://user-images.githubusercontent.com/65653163/206315045-32def41c-ec8d-4a20-a021-8e49384165f2.png)
![boss2](https://user-images.githubusercontent.com/65653163/206315063-4e2e391a-1d21-410c-9e5d-279b2ce0ab81.png)
![boss3](https://user-images.githubusercontent.com/65653163/206315068-11a595e8-01df-4ab5-b025-4d7380453461.png)
![boss4](https://user-images.githubusercontent.com/65653163/206315088-14012c2a-b665-4153-942f-4d7735358f76.png)
![boss5](https://user-images.githubusercontent.com/65653163/206315094-6e2adfd5-2adb-4acc-8739-a9a38e455ad2.png)

## Implementation Details

### Follow the Mouse Cursor
To make the Black Hole follow the mouse, the mouse position is constantly tracked using an event listener on the canvas. The position is offset to match the sprite and the hitbox of the sprite.
```javascript
// mouse movement listener
const mousePos = [];
canvas.addEventListener("mousemove", (event) => {
  event.preventDefault();
  event.stopPropagation();
  mousePos[0] = event.clientX;
  mousePos[1] = event.clientY;
});

// updating the position of the blackhole based on the current mousePos
update(mousePos) {
    let vel = mousePos.slice();
    if (mousePos[0] !== this.pos[0] && mousePos[1] !== this.pos[1]) {
      vel[0] -= this.pos[0] + 25;
      vel[1] -= this.pos[1] + 83;
      vel = Utils.setMag(vel, 0.5);
      if (this.pos[0] + vel[0] >= 0 && this.pos[1] + vel[1] >= 0) {
        this.pos[0] += vel[0];
        this.pos[1] += vel[1];
      }
    }
  }
```

### Collision Detection
In every rendered frame, the game checks for a collision between any two objects on the board. If the Black Hole gets consumed at any point of time, the game ends. Other planets can consume each other in order to grow in size. After the Black Hole gets too big, the player can consume smaller planets to shrink in size.
```javascript
checkCollisions() {
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
              this.running = false;
            }
            this.objects[j].collideWith(this.objects[i]);
          }
          break;
        }
      }
    }
  }
```

### p5.js Functions Implemented in Vanilla JS
To use vectors and perform calculations on them, I implemented a couple of p5.js functions in vanilla JavaScript. These functions allowed for generating random vectors, calculating the distance between two points in a 2D space, and scaling a vector's magnitude.
```javascript
// generate random vectors when given a length
randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return [Math.sin(deg) * length, Math.cos(deg) * length];
}

// calculate the distance between two points
distance(pos1, pos2) {
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);
}

// change a vector's magnitude to a given new magnitude
setMag(vec, newMag) {
    let currentMag = this.distance(vec, [0, 0]);
    return [vec[0] * (newMag / currentMag), vec[1] * (newMag / currentMag)];
}
```

## Technologies Used

- For the core game logic - DOM Manipulation using Vanilla JavaScript
- For the rendering - HTML, CSS and the Canvas API
- For collisions - applied physics and mathematics
- For transpilation and bundling - Babel and Webpack


## Future Features

- Add a scoreboard which keeps track of scores across sessions
- Add multiplayer functionality using websockets
- Add more songs to the soundtrack
- Add sprite variety
