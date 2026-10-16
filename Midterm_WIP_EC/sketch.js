
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
let gameStarted = false;
let gameOver = false;
let ballX = 300;
let ballY = 0;
let ballSpeed = 3;
let ballSize = 30;



function preload() {
  brickWall = loadImage("images/wall.jpg");
}

function setup() {
  createCanvas(600, 800);
}

function draw() {
  image(brickWall, 0, 0, width, height);

  // Line follows the mouse
  let lineX = mouseX;
  let lineY = mouseY;

  // Keep the line inside the left and right edges
  if (lineX < 40) {
    lineX = 40;
  } else if (lineX > width - 40) {
    lineX = width - 40;
  }

  // Keep the line inside the top and bottom edges
  if (lineY < 2) {
    lineY = 2;
  } else if (lineY > height - 2) {
    lineY = height - 2;
  }

  stroke(0,0,0);
  strokeWeight(5);
  line(lineX - 40, lineY, lineX + 40, lineY);

  // Start text
  if (gameStarted == false) {
  fill(255, 0, 0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont("Impact");

  textSize(32);
  text("PRESS ENTER TO START",600/2,800/2);
  }

  // Ball falls when game starts
  if (gameStarted == true && gameOver == false) {
    ballY = ballY + ballSpeed;

    fill(255, 0, 0);
    noStroke();
    circle(ballX, ballY, ballSize);
    // Check if the ball reaches the bottom
  if (ballY >= height - ballSize / 2) {
    gameOver = true;
  }
 }

   // Game Over screen
   if (gameOver == true) {
    fill(255, 0, 0);
   noStroke();
   textAlign(CENTER, CENTER);
   textSize(40);
   text("GAME OVER", width / 2, height / 2);
 }
}
function keyPressed() {
  if (keyCode == ENTER) {
    gameStarted = true;
  }
}