import Game from "./scripts/game";
// canvas
const canvas = document.getElementById("game-canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
const ctx = canvas.getContext("2d");

// running the game
const game = new Game(canvas);
game.start(ctx);