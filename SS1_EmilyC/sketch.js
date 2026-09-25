/*
Name: Emily Chavez

Title: static shapes

I would lke to explore how to put figures into motion and make them more 
interesting through movement. This first sketch connect to that idea because,
at firt, it may look simple or not interesting. However, my goal is to
eventually add movement to the shapes and see how their interaction can
change the wy the sketch looks and feels.

*/

function setup() {
  createCanvas(800, 900);
}

function draw() {
  background(178,255,255);

 fill(255,0,0);
 stroke(30)
 strokeWeight(10);
circle(200,200,300);


 fill(0,255,0);
 stroke(15);
 strokeWeight(10);
rect(400,450,300,300);

 fill(0);
 noStroke();
rect(50,370,300,20);

 fill(0);
circle(180, 180, 8);
circle(220, 180, 8);
circle(180, 220, 8);
circle(220, 220, 8);
circle(200, 200, 8);

 fill(255);
circle(450, 600, 8);
circle(500, 600, 8);
circle(550, 600, 8);
circle(600, 600, 8);
circle(650, 600, 8);

 noFill();
 stroke(15);
 strokeWeight(10);
ellipse(540,610,450,450);

}

