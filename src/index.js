import Game from "./scripts/game";
// canvas
const canvas = document.getElementById("game-canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
const ctx = canvas.getContext("2d");

// mouse movement listener
const mousePos = [];
canvas.addEventListener("mousemove", (event) => {
  event.preventDefault();
  event.stopPropagation();
  mousePos[0] = event.clientX;
  mousePos[1] = event.clientY;
});

// running the game
const game = new Game(canvas);
game.start(ctx, mousePos);
