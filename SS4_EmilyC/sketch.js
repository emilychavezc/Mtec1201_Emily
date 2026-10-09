
/*
Name: Emily C.
Title: Falling Leaves
Instructions: Press and hold any key to show the leaves.
Move the mouse to change their colors.
*/

let canvasSize = 600;
let centerX = 300;

let leafX;
let leafY;

let treeMoveX = 0;
let treeMoveY = 0;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(224, 205, 170);
  drawTrees();
}

function draw() {
  // Trees shake automatically
  if (true) {
    treeMoveX = random(-3, 3);
    treeMoveY = random(-6, 2);
  }

  // Leaves fall while a key is held
  if (keyIsPressed) {
    leafX = mouseX + random(-10, 10);
    leafY = mouseY + random(-10, 10);

    if (mouseX > 400) {
      fill(190, 65, 20); 
    } else if (mouseX > centerX) {
      fill(230, 120, 30); 
    } else {
      fill(245, 200, 60);
    }

    noStroke();
    triangle(
      leafX, leafY,
      leafX - 4, leafY + 6,
      leafX + 4, leafY + 6
    );
  }

  drawTrees();
}

function drawTrees() {
  // Tree trunks
  fill(110, 70, 40);

  rect(110 + treeMoveX, 300 + treeMoveY, 30, 200);
  rect(285 + treeMoveX, 280 + treeMoveY, 30, 220);
  rect(460 + treeMoveX, 300 + treeMoveY, 30, 200);

  // Tree tops
  fill(40, 100, 40);

  ellipse(125 + treeMoveX, 250 + treeMoveY, 130, 130);
  ellipse(300 + treeMoveX, 230 + treeMoveY, 150, 150);
  ellipse(475 + treeMoveX, 250 + treeMoveY, 130, 130);
}
