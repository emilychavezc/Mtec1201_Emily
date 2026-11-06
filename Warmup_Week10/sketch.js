
let i = 0;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  stroke(255, 255, 0);
  strokeWeight (10);
  for (let i = 0; i < 10; i++) {
    point(50 + i * 30, 200);
  }
}