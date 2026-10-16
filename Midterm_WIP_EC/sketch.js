
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
let font;


function preload() {
  brickWall = loadImage("images/brickwall.jpg");
  font = loadFont("fonts/Press_Start_2P");
}

function setup() {
  createCanvas(600, 1067);
}

function draw() {
  image(brickWall, 0, 0, width, height);

  // Line follows the mouse
  let lineX = constrain(mouseX, 40, width - 40);
  let lineY = constrain(mouseY, 0, height);

  stroke(255);
  strokeWeight(3);
  line(lineX - 40, lineY, lineX + 40, lineY);

  // Start text
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(font);

  textSize(32);
  text("START", width / 2, 560);

  textSize(18);
  text("PRESS ENTER TO START", width / 2, 600);
}
