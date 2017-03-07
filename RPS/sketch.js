var userName = prompt("Welcome to Rock Paper Scissors! Try to win the computer for three times. What is your name?");
var computerChoice = Math.random();
function preload() {
  Scissors = loadImage('Scissors.png');
  Rock = loadImage('Rock.png');
  Paper = loadImage('Paper.png');
  Scissors2 = loadImage('Scissors2.png');
  Rock2 = loadImage('Rock2.png');
  Paper2 = loadImage('Paper2.png');
}
if (0 < computerChoice && computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (0.34 < computerChoice && computerChoice < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
function setup() {
  createCanvas(1200, 600);
  background('#DAFDF8');
}
function draw() {
  menu();
}
function menu() {
  noFill();
  strokeWeight(3);
  rect(120, 475, 960, 105, 10);
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
  if (overContinueButton()) {
    fill('black');
  } else {
    fill('gray');
  }
  rect(800, 520, 100, 50);
  fill(255);
  text("CONTINUE", 800 + 10, 520 + 30);
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
function overResetButton() {
  return mouseX > 950 && mouseX < 950 + 100 && mouseY > 520 && mouseY < 520 + 50;
}
function overContinueButton() {
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
  fill(0);
  textSize(25);
  if (overRock()) {
    if (computerChoice === "scissors") {
      text("Your move: rock", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("User wins this round!", 500, 150);
      image(Rock2, 25, 200);
      image(Scissors, 675, 200);
    } else if (computerChoice === "paper") {
      text("Your move: rock", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Rock2, 25, 200);
      image(Paper, 675, 200);
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
    } else if (computerChoice === "scissors") {
      text("Your move: paper", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Paper2, 25, 200);
      image(Scissors, 675, 200);
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
    } else if (computerChoice === "rock") {
      text("Your move: scissors", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("Computer wins this round!", 500, 150);
      image(Scissors2, 25, 200);
      image(Rock, 675, 200);
    } else {
      textSize(32);
      text("Your move: scissors", 500, 75);
      text("Computer's move: " + computerChoice, 500, 100);
      text("It's a tie!", 500, 150);
      image(Paper2, 25, 200);
      image(Paper, 675, 200);
    }
  }
}