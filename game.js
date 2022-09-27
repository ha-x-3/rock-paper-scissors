// Declare choices and globals
const choices = ['rock', 'paper', 'scissors'];
let computerSelection;

//Prompt player choice
let playerSelection = prompt("Choose your move.");
  if (playerSelection.toLowerCase() === "rock".toLowerCase()) {
    alert("You chose rock.");
    console.log('You chose ' + playerSelection + ".");
  } else if (playerSelection.toLowerCase() === "paper".toLowerCase()) {
    alert("You chose paper.")
    console.log('You chose ' + playerSelection + ".");
  } else if (playerSelection.toLowerCase() === "scissors".toLowerCase()) {
    alert("You chose scissors.")
    console.log('You chose ' + playerSelection + ".");
  } else {
    alert("Invalid selection")
  }

// Function for random computer choice (with console.log for debugging)
function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random()*choices.length)];
  return computerSelection;
}

console.log('Computer selected ' + getComputerChoice() + ".");
alert('Computer selected ' + computerSelection + ".")

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      alert("Tie!");
      console.log('Tie!');
    } else if (computerSelection === 'paper') {
      alert("You Lose! Paper beats rock.");
      console.log('You Lose! Paper beats rock.');
    } else if (computerSelection === 'scissors') {
      alert("You Win! Rock beats scissors.");
      console.log("You Win! Rock beats scissors.");
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      alert("You Win! Paper beats rock.");
      console.log("You Win! Paper beats rock.");
    } else if (computerSelection === 'paper') {
      alert("Tie!");
      console.log('Tie!');
    } else if (computerSelection === 'scissors') {
      alert("You Lose! Scissors beats paper.");
      console.log('You Lose! Scissors beats paper.');
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      alert("You Lose! Rock beats scissors.");
      console.log('You Lose! Rock beats scissors.');
    } else if (computerSelection === 'paper') {
      alert("You Win! Scissors beats paper.");
      console.log("You Win! Scissors beats paper.");
    } else if (computerSelection === 'scissors') {
      alert("Tie!");
      console.log('Tie!');
    }
  }
}

playRound(playerSelection, computerSelection);