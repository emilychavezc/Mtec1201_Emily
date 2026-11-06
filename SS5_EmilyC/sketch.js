/*
Name: Emily Chavez
Title: Autumn Trees
Instructions:
Hold any key and move your mouse to release autumn leaves.
The leaves change color depending on the mouse position.
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
}

function draw() {

  background(224, 205, 170);

  treeMoveX = random(-1, 1);
  treeMoveY = random(-1, 1);

  drawTrees();

  if (keyIsPressed) {

    let i = 0;

    while (i < 5) {

      leafX = mouseX + random(-30, 30);
      leafY = mouseY + random(-30, 30);

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

      i++;
    }
  }
}

function drawTrees() {

  for (let i = 0; i < 3; i++) {

    let treeX = 125 + i * 175;
    let treeY = 250;
    let treeSize = 130;

    if (i == 1) {
      treeY = 230;
      treeSize = 150;
    }

    fill(110, 70, 40);

    rect(
      treeX - 15 + treeMoveX,
      treeY + 50 + treeMoveY,
      30,
      200
    );

    fill(40, 100, 40);

    ellipse(
      treeX + treeMoveX,
      treeY + treeMoveY,
      treeSize,
      treeSize
    );
  }
}