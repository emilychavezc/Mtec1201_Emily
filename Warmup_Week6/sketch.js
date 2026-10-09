function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    fill(255, 0, 0);
  } else {
    fill(255,204,0);
  } 

  stroke(10);
  strokeWeight(5);

rect(200, 200, 50, 50);

}
