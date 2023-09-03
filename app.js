const green = document.getElementById("greenDiv");
const red = document.getElementById("redDiv");
const body = document.querySelector("body");

let x = 0;
let y = 0;
let a = 0;
let b = 0;
let speed = 15;

body.addEventListener("keydown", moveGreen);

function moveGreen(event) {
  if (event.key == "ArrowDown") {
    y += speed;
    green.style.top = y + "px";
  } else if (event.key == "ArrowUp") {
    y -= speed;
    green.style.top = y + "px";
  } else if (event.key == "ArrowRight") {
    x += speed;
    green.style.left = x + "px";
  } else if (event.key == "ArrowLeft") {
    x -= speed;
    green.style.left = x + "px";
  }

  if (event.key == "s") {
    b += speed;
    red.style.top = b + "px";
  } else if (event.key == "w") {
    b -= speed;
    red.style.top = b + "px";
  } else if (event.key == "d") {
    a += speed;
    red.style.left = a + "px";
  } else if (event.key == "a") {
    a -= speed;
    red.style.left = a + "px";
  }
}
