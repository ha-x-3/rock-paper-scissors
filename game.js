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
    console.log('You chose ' + playerSelection + ".");
  } else if (playerSelection.toLowerCase() === "paper".toLowerCase()) {
    console.log('You chose ' + playerSelection + ".");
  } else if (playerSelection.toLowerCase() === "scissors".toLowerCase()) {
    console.log('You chose ' + playerSelection + ".");
  } else {
    alert("Invalid selection");
    playerSelection = prompt("Choose your move.");
    console.log('You chose ' + playerSelection + ".");
  }

  // Function for random computer choice (with console.log for debugging)
  function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random()*choices.length)];
  return computerSelection;
  }

  console.log('Computer selected ' + getComputerChoice() + ".");

  //Function for 1 round of play
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        console.log('Tie!');
        tie++;
      } else if (computerSelection === 'paper') {
        console.log('You Lose! Paper beats rock.');
        computerScore++;
      } else if (computerSelection === 'scissors') {
        console.log("You Win! Rock beats scissors.");
        playerScore++;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        console.log("You Win! Paper beats rock.");
        playerScore++;
      } else if (computerSelection === 'paper') {
        console.log('Tie!');
        tie++;
      } else if (computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats paper.');
        computerScore++;
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        console.log('You Lose! Rock beats scissors.');
        computerScore++;
      } else if (computerSelection === 'paper') {
        console.log("You Win! Scissors beats paper.");
        playerScore++;
      } else if (computerSelection === 'scissors') {
        console.log('Tie!');
        tie++;
      }
    }
  }
  
  playRound(playerSelection, computerSelection);
  console.log('Player score: ' + playerScore, 'Computer score: ' + computerScore, 'Ties: ' + tie, 'Round: ' + i);
}

if (playerScore > computerScore) {
  alert('You win this game! Play again!')
  console.log('You win this game! Play again!')
} else if (playerScore < computerScore) {
  alert('Sorry, you lost this game! Refresh to play again!')
  console.log('Sorry, you lost this game! Refresh to play again!')
} else if (playerScore === computerScore) {
  alert("It's a tie! Play again!");
  console.log("It's a tie! Play again!");
}