var userName = prompt("Welcome to Rock Paper Scissors! What is your name?");
var playCount = prompt("How many times should the winner win? Enter a number.");
var computerChoice;
var user_count = 0;
var computer_count = 0;

function preload() {
  Scissors = loadImage('Scissors.png');
  Rock = loadImage('Rock.png');
  Paper = loadImage('Paper.png');
  Scissors2 = loadImage('Scissors2.png');
  Rock2 = loadImage('Rock2.png');
  Paper2 = loadImage('Paper2.png');
  win = loadImage('win.png');
  lost = loadImage('lost.png');
}

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
  createCanvas(1200, 600);
  background('skyblue');
  textFont('Helvetica');
}

function draw() {
  menu();
}

function menu() {
  noStroke();
  fill(0);
  textSize(25);
  text("Player 1: " + userName, 100, 50);
  text("Player 2: Computer", 900, 50);
  if (overResetButton()) {
    fill('black');
  } else {
    fill('gray');
  }
  rect(950, 520, 100, 50);
  fill(255);
  textSize(16);
  text("RESET", 950 + 25, 520 + 30);
  if (overTutorialButton()) {
    fill('black');
  } else {
    fill('gray');
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

function reset() {
  user_count = 0;
  computer_count = 0;
  background('skyblue');
}

function overResetButton() {
  return mouseX > 950 && mouseX < 950 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

function overTutorialButton() {
  return mouseX > 800 && mouseX < 800 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

function overRock() {
  return mouseX > 150 && mouseX < 150 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

function overPaper() {
  return mouseX > 300 && mouseX < 300 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

function overScissors() {
  return mouseX > 450 && mouseX < 450 + 100 && mouseY > 520 && mouseY < 520 + 50;
}

function mousePressed() {
  background('skyblue');
  mix();
  fill(0);
  textSize(25);
  if (overResetButton()) {
    reset();
  }
  if (overTutorialButton()) {
    fill(0);
    rect(300, 100, 600, 300);
    fill(100);
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
        text("YOU WIN!", 500, 500);
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
        text("SORRY, YOU LOSE :(", 500, 500);
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
        text("YOU WIN!", 500, 500);
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
        text("SORRY, YOU LOSE :(", 500, 500);
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
        text("YOU WIN!", 500, 500);
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
        text("SORRY, YOU LOSE :(", 500, 500);
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