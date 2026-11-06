//Emily Chavez - Midterm UPDATE
//Game: Catch The ball!
//Instructions: Press Enter to start the game. Move the mouse to catch the ball with the line.
//If the ball falls below the line, the game is over. Press Space to reset the game.



let brickWall;
let gameStarted = false;
let gameOver = false;

let ballX = 300;
let ballY = 30;
let ballSpeedX = 2;
let ballSpeedY = 3;
let ballSize = 30;

const LINE_MIN_X = 40;
const LINE_MAX_X = 560;
const LINE_Y = 700;

function preload() {
  brickWall = loadImage("image/background.png");
}


function setup() {
  createCanvas(600, 800);
  textAlign(CENTER, CENTER);
}

function draw() {
  image(brickWall, 0, 0, width, height);

  if (gameStarted == false && gameOver == false) {
    drawStartScreen();
  }

  if (gameStarted == true && gameOver == false) {
    drawLine();
    drawBall();
  }

  if (gameOver == true) {
    drawGameOver();
    drawResetScreen();
  }
}

// Start screen
function drawStartScreen() {
  fill(0, 255, 255);
  noStroke();
  textFont("Impact");
  textSize(32);
  text("PRESS ENTER TO START", width / 2, height / 2);
}

// Line follows the mouse horizontally
function drawLine() {
  let lineX = mouseX;
  let lineY = LINE_Y;

  if (lineX < LINE_MIN_X) {
    lineX = LINE_MIN_X;
  } else if (lineX > LINE_MAX_X) {
    lineX = LINE_MAX_X;
  }

  // Line color 
  stroke(0, 255, 255);
  strokeWeight(5);
  line(lineX - 40, lineY, lineX + 40, lineY);
}

// Ball bounces around the canvas
function drawBall() {
  let previousBallY = ballY;

  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  // Bounce off the left and right walls
  if (ballX + ballSize / 2 >= width) {
    ballX = width - ballSize / 2;
    ballSpeedX = -ballSpeedX;

    increaseBallSpeed(); 
  } else if (ballX - ballSize / 2 <= 0) {
    ballX = ballSize / 2;
    ballSpeedX = -ballSpeedX;

    increaseBallSpeed(); 
  }

  // Bounce off the top wall
  if (ballY - ballSize / 2 <= 0) {
    ballY = ballSize / 2;
    ballSpeedY = -ballSpeedY;

    increaseBallSpeed(); //
  }

  // Check if the ball touches the line
  let lineX = mouseX;

  if (lineX < LINE_MIN_X) {
    lineX = LINE_MIN_X;
  } else if (lineX > LINE_MAX_X) {
    lineX = LINE_MAX_X;
  }

  if (
    ballSpeedY > 0 &&
    previousBallY + ballSize / 2 <= LINE_Y &&
    ballY + ballSize / 2 >= LINE_Y &&
    ballX + ballSize / 2 >= lineX - 40 &&
    ballX - ballSize / 2 <= lineX + 40
  ) {
    ballY = LINE_Y - ballSize / 2;
    ballSpeedY = -ballSpeedY;

    increaseBallSpeed(); // CHANGE 2
  }

  // Game over if the ball falls below the canvas
  if (ballY - ballSize / 2 > height) {
    gameOver = true;
  }

  //Ball color 
  fill(255, 255, 0);
  noStroke();
  circle(ballX, ballY, ballSize);
}

// Increase speed after every bounce
function increaseBallSpeed() {

  ballSpeedX = ballSpeedX * 1.05;
  ballSpeedY = ballSpeedY * 1.05;

  // Maximum speed to keep the game playable
  if (ballSpeedX > 5) {
    ballSpeedX = 5;
  } else if (ballSpeedX < -5) {
    ballSpeedX = -5;
  }

  if (ballSpeedY > 5) {
    ballSpeedY = 5;
  } else if (ballSpeedY < -5) {
    ballSpeedY = -5;
  }
}

// Game over screen
function drawGameOver() {
  fill(255);
  noStroke();
  textFont("Impact");
  textSize(40);
  text("GAME OVER", width / 2, height / 2 - 30);
}

// Reset message
function drawResetScreen() {
  fill(255, 255, 0);
  noStroke();
  textFont("Impact");
  textSize(20);
  text("PRESS SPACE TO RESET", width / 2, height / 2 + 30);
}

// Keyboard controls
function keyPressed() {

  // Start with ENTER
  if (keyCode == ENTER && gameStarted == false && gameOver == false) {
    gameStarted = true;
  }

  // Reset with SPACE
  if (keyCode == 32 && gameOver == true) {
    ballX = 300;
    ballY = 30;
    ballSpeedX = 2;
    ballSpeedY = 3;

    gameOver = false;
    gameStarted = false;
  }
}
