let circleX = 200;
let circleY = 200;
let dotMove = 0;


function setup() {
  createCanvas(800, 900);
}

function draw() {
  background(178,255,255);


//circle follows the mouse
circleX=mouseX;
circleY=mouseY;


fill(255,0,0);
 stroke(30)
 strokeWeight(10);
circle(circleX,circleY,300);

 fill(0);
 noStroke();
rect(50,370,300,20);


// One dot stays in place
  fill(0);
circle(circleX - 20, circleY - 20, 8);

// One dot moves inside the circle
circle(circleX + dotMove, circleY - 20, 8);
}

function mousePressed() {
  dotMove = dotMove + 100;
}

