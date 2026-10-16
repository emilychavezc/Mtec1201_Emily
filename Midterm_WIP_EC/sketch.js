
//background: image of a brick wall
//game: keep bounce or fail (draft)
//one line follows the mouse
// only one ball bouncing at the beginnig, press any key to add a second ball
// speed of the ball increases with each bounce
// if one of the balls touches the bottom of the canvas, the game ends.
// text: congratulations or game over
// balls: random colors. same size, same position
// countdown before the game starts 
// bouncing between walls 

let brickWall;


function preload() {
  brickWall = loadImage("images/wall.jpg");
}

function setup() {
  createCanvas(600, 800);
}

function draw() {
  image(brickWall, 0, 0, width, height);

  // Line follows the mouse
  let lineX = constrain(mouseX, 40, width - 40);
  let lineY = constrain(mouseY, 2, height - 2);

  stroke(0,0,0);
  strokeWeight(5);
  line(lineX - 40, lineY, lineX + 40, lineY);

  // Start text
  fill(255, 0, 0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont("Impact");

  textSize(32);
  text("PRESS ENTER TO START",600/2,800/2);
}
