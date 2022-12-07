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

// running the game
const game = new Game(canvas, mousePos);
game.start();

// music toggle mute
const muteButton = document.getElementById("muteButton");
const unmuteButton = document.getElementById("unmuteButton");
unmuteButton.classList.add("hidden");
muteButton.addEventListener("click", () => {
  game.music.volume = 0.0;
  unmuteButton.classList.remove("hidden");
  muteButton.classList.add("hidden");
});
unmuteButton.addEventListener("click", () => {
  game.music.volume = 0.1;
  muteButton.classList.remove("hidden");
  unmuteButton.classList.add("hidden");
});
