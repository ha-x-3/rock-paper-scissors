// Declare choices and globals
const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tie = parseInt(0);

//Play 5 rounds
for (let i = 1; i <= 5; i++) {
  //Prompt player choice
  playerSelection = prompt("Choose your move.");
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
    alert("Invalid selection");
    prompt("Choose your move.");
  }

  // Function for random computer choice (with console.log for debugging)
  function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random()*choices.length)];
  return computerSelection;
  }

  console.log('Computer selected ' + getComputerChoice() + ".");
  alert('Computer selected ' + computerSelection + ".")

  //Function for 1 round of play
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        alert("Tie!");
        console.log('Tie!');
        tie++;
      } else if (computerSelection === 'paper') {
        alert("You Lose! Paper beats rock.");
        console.log('You Lose! Paper beats rock.');
        computerScore++;
      } else if (computerSelection === 'scissors') {
        alert("You Win! Rock beats scissors.");
        console.log("You Win! Rock beats scissors.");
        playerScore++;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        alert("You Win! Paper beats rock.");
        console.log("You Win! Paper beats rock.");
        playerScore++;
      } else if (computerSelection === 'paper') {
        alert("Tie!");
        console.log('Tie!');
        tie++;
      } else if (computerSelection === 'scissors') {
        alert("You Lose! Scissors beats paper.");
        console.log('You Lose! Scissors beats paper.');
        computerScore++;
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        alert("You Lose! Rock beats scissors.");
        console.log('You Lose! Rock beats scissors.');
        computerScore++;
      } else if (computerSelection === 'paper') {
        alert("You Win! Scissors beats paper.");
        console.log("You Win! Scissors beats paper.");
        playerScore++;
      } else if (computerSelection === 'scissors') {
        alert("Tie!");
        console.log('Tie!');
        tie++;
      }
    }
  }
  
  playRound(playerSelection, computerSelection);
  console.log('Player score: ' + playerScore, 'Computer score: ' + computerScore, 'Ties: ' + tie, 'Round: ' + i);
}

