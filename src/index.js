import Game from "./scripts/game";
// canvas
const canvas = document.getElementById("game-canvas");
canvas.setAttribute("width", window.innerWidth - 50);
canvas.setAttribute("height", window.innerHeight - 150);
const ctx = canvas.getContext("2d");

// mouse movement listener
const mousePos = [];
canvas.addEventListener("mousemove", (event) => {
  event.preventDefault();
  event.stopPropagation();
  mousePos[0] = event.clientX;
  mousePos[1] = event.clientY;
});

// use a state variable
// add click event listener to window
// reassign state variable inside the listener
// use the state variable to call game.start

// running the game
const game = new Game(canvas, mousePos);
game.start();
