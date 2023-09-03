let button = document.getElementById("startButton");
let context = document.getElementById("myCanvas").getContext("2d");

button.addEventListener("click", () => {
  context.lineWidth = 1;
  context.strokeStyle = "#fff";
  context.beginPath();
  context.moveTo(250, 100);
  context.lineTo(250, 400);
  context.stroke();
});
