// Declare computer choices
const computerChoices = ['Rock', 'Paper', 'Scissors'];

// Function for random computer choice (with console.log for debugging)
function getComputerChoice() {
  let computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return computerSelection;
}
console.log(getComputerChoice());

//Prompt player choice
let playerSelection = prompt("Choose your move.");
  if (playerSelection.toLowerCase() === "rock".toLowerCase()) {
    alert("You chose rock.");
  } else if (playerSelection.toLowerCase() === "paper".toLowerCase()) {
    alert("You chose paper.")
  } else if (playerSelection.toLowerCase() === "scissors".toLowerCase()) {
    alert("You chose scissors.")
  } else {
    alert("Invalid selection")
  }

//function playRound(playerSelection, computerSelection) {
  
//}