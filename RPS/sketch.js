/*
Created by: Nichole Kim & Sang Woo Nam
Last edited: March 7, 2017
This is the final project for HCDE 598, which allows the users to play Rock Paper Scissors with the computer.
*/

var userName = prompt("Welcome to Rock Paper Scissors! What is your name?");
var playCount = prompt("How many times should the winner win? Enter a number.");
var computerChoice;
var user_count = 0;
var computer_count = 0;

function preload() {
  Scissors = loadImage('Scissors.png'); // image of scissors preloaded
  Rock = loadImage('Rock.png'); // image of rock preloaded
  Paper = loadImage('Paper.png'); // image of paper preloaded
  Scissors2 = loadImage('Scissors2.png'); // image of scissors (user's perspective) preloaded
  Rock2 = loadImage('Rock2.png'); // image of rock (user's perspective) preloaded
  Paper2 = loadImage('Paper2.png'); // image of paper (user's perspective) preloaded
  win = loadImage('win.png'); // image of "win" sign preloaded
  lost = loadImage('lost.png'); // image of "lost" sign preloaded
}

// function that mixes up & executes the computer's move 
function mix() {
  computerChoice = Math.random();
  if (0 < computerChoice && computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (0.34 < computerChoice && computerChoice < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

function setup() {
  createCanvas(1200, 600); // canvas size set to 1200 * 600
  background('skyblue'); // background color set to skyblue
  textFont('Helvetica'); // Font of the texts set to Helvetica
}

function draw() {
  menu(); // Calls the menu function below

  for (i = 0; i < user_count; i++) { // a for loop that moves from 0 till the value of the variable user_count
    fill('red'); // sets the filling color to red
    ellipse(i * 50 + 100, 100, 30, 30); // draws ellipse(s) based on the value of the user_count
  }
  for (i = 0; i < computer_count; i++) { // a for loop that moves from 0 till the value of the variable computer_count
    fill('red'); // sets the filling color to red
    ellipse(i * 50 + 900, 100, 30, 30); // draws ellipse(s) based on the value of the user_count
  }

  if (user_count == playCount) { // if user_count value equals to the value of playCount
    winSize = random(5, 500); // sets the size of the "win" sign on a random basis, between 5 and 500
    image(win, random(-100, 1200), random(-100, 600), winSize, winSize * (106 / 190)); // draws the "win" sign on a random basis on the canvas
  }
  if (computer_count == playCount) { // if computer_count value equals to the value of playCount
    lostSize = random(5, 500); // sets the size of the "lost" sign on a random basis, between 5 and 500
    image(lost, random(-100, 1200), random(-100, 600), lostSize, lostSize * (119 / 190)); // draws the "lost" sign on a random basis on the canvas
  }
}

// menu function that creates the player names, rock paper scissors, "Reset" button, and "How to Play" button.
function menu() {
  noStroke();
  fill(0);
  textSize(25);
  text("Player 1: " + userName, 100, 50); // player 1 name
  text("Player 2: Computer", 900, 50); // player 2 name
  if (overResetButton()) {
    fill('black');
  } else {
    fill('gray'); // allows the color change when mouse is hovered
  }
  rect(950, 520, 100, 50);
  fill(255);
  textSize(16);
  text("RESET", 950 + 25, 520 + 30);
  if (overTutorialButton()) {
    fill('black');
  } else {
    fill('gray'); // allows the color change when mouse is hovered
  }
  rect(800, 520, 100, 50);
  fill(255);
  text("HOW TO PLAY", 800 + 10, 520 + 30);
  fill(0);
  text("Choose your move!", 280, 500);
  fill('green');
  rect(150, 520, 100, 50);
  fill('orange');
  rect(300, 520, 100, 50);
  fill('red');
  rect(450, 520, 100, 50);
  fill(255);
  text("Rock", 150 + 25, 520 + 30);
  text("Paper", 300 + 25, 520 + 30);
  text("Scissor", 450 + 25, 520 + 30);
}

// function that is called when "reset" button is pressed
function reset() {
  user_count = 0;
  computer_count = 0;
  background('skyblue');
}

// function that determines where mouseX and mouseY should be to press on Reset button
function overResetButton() {
  return mouseX > 950 && mouseX < 950 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on How to Play button
function overTutorialButton() {
  return mouseX > 800 && mouseX < 800 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on Rock
function overRock() {
  return mouseX > 150 && mouseX < 150 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on Paper
function overPaper() {
  return mouseX > 300 && mouseX < 300 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that determines where mouseX and mouseY should be to press on Scissors
function overScissors() {
  return mouseX > 450 && mouseX < 450 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

// function that is executed when mouse button is pressed.
// includes executing computer's move and comparing the user's move with each other to determine the winner & loser
// also includes resetting the game & viewing the Tutorial
function mousePressed() {
  background('skyblue');

  // resets the game
  if (overResetButton()) {
    reset();
  }

  // Shows the "how to play" text
  if (overTutorialButton()) {
    fill(0);
    rect(300, 100, 600, 300);
    fill('gray');
    rect(500, 350, 200, 50);
    fill(255);
    textSize(18);
    text("Welcome to Rock Paper Scissors!", 350, 150);
    text("This game is created as the final project of HCDE 598.", 350, 175);
    text("Press Rock, Paper, or Scissor to make your move.", 350, 200);
    text("When you press, computer will make its move randomly.", 350, 225);
    text("Good luck!", 350, 250);
    text("Creators: Sang Woo Nam & Nichole Kim", 350, 300);
    text("<EXIT TO GAME>", 525, 380);
  }

  // lists all 9 possibilities that can happen (3 moves from user * 3 moves from computer)
  // determines the winner & loser for each
  fill(0);
  mix();
  textSize(25);
  if (overRock()) {
    if (computerChoice === "scissors") {
      text("Your move: rock", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("User wins this round!", 500, 150);
      image(Rock2, 25, 200);
      image(Scissors, 675, 200);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        text("YOU WIN!", 500, 300);
      } else {
        user_count++;
      }
    } else if (computerChoice === "paper") {
      text("Your move: rock", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Rock2, 25, 200);
      image(Paper, 675, 200);

      if (computer_count == playCount - 1) {
        computer_count++;
        textSize(50);
        text("SORRY, YOU LOSE :(", 350, 300);
      } else {
        computer_count++;
      }
    } else {
      text("Your move: rock", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("It's a tie!", 500, 150);
      image(Rock2, 25, 200);
      image(Rock, 675, 200);
    }
  } else if (overPaper()) {
    if (computerChoice === "rock") {
      text("Your move: paper", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("User wins this round!", 500, 150);
      image(Paper2, 25, 200);
      image(Rock, 675, 200);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        text("YOU WIN!", 500, 300);
      } else {
        user_count++;
      }
    } else if (computerChoice === "scissors") {
      text("Your move: paper", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Paper2, 25, 200);
      image(Scissors, 675, 200);

      if (computer_count == playCount - 1) {
        computer_count++;
        textSize(50);
        text("SORRY, YOU LOSE :(", 350, 300);
      } else {
        computer_count++;
      }
    } else {
      text("Your move: paper", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("It's a tie!", 500, 150);
      image(Paper2, 25, 200);
      image(Paper, 675, 200);
    }
  } else if (overScissors()) {
    if (computerChoice === "paper") {
      text("Your move: scissors", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("User wins this round!", 500, 150);
      image(Scissors2, 25, 200);
      image(Paper, 675, 200);

      if (user_count == playCount - 1) {
        user_count++;
        textSize(50);
        text("YOU WIN!", 500, 300);
      } else {
        user_count++;
      }
    } else if (computerChoice === "rock") {
      text("Your move: scissors", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Scissors2, 25, 200);
      image(Rock, 675, 200);

      if (computer_count == playCount - 1) {
        computer_count++;
        textSize(50);
        text("SORRY, YOU LOSE :(", 350, 300);
      } else {
        computer_count++;
      }
    } else {
      text("Your move: scissors", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("It's a tie!", 500, 150);
      image(Scissors2, 25, 200);
      image(Scissors, 675, 200);
    }
  }
}