const canvasSize = 600;
let mouthSize = 10;
let micX = 350;
let micY = 400;
let curtainX = 0;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("lightblue");

}

function draw() {
  background("lightblue");
  stickman(350, 300);
  microphone(micX, micY);
  drawCurtains();

}

// Press any key to change the mouth size

function keyPressed() {
  mouthSize = random(5, 25);

}

// Stickman function

function stickman(x, y) {
  fill("white");
  stroke("black");
  strokeWeight(3);

  // head

  circle(x, y, 120);

  // body

  rect(x - 15, y + 60, 30, 150);


  // eyes

  fill("black");
  circle(x - 20, y - 15, 10);
  circle(x + 20, y - 15, 10);

  // mouth

  rect(x - 15, y + 15, 30, mouthSize);

}

// Microphone function

function microphone(x, y) {

  fill("black");
  noStroke();
  circle(x, y, 35);
  rect(x - 7, y + 15, 14, 70);

}

// Theatre curtains

function drawCurtains() {

  fill("red");
  noStroke();

  // left curtain

  rect(0 - curtainX, 0, 300, 600);

  // right curtain

  rect(300 + curtainX, 0, 300, 600);

}

// Open the curtains when the mouse is pressed

function mousePressed() {

  curtainX = curtainX + 300;

}