const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  let moves = 0;

  // Function to 
  const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const playerOptions = [rockBtn,paperBtn,scissorBtn];
      const computerOptions = ['rock','paper','scissors']

      // Function to start playing game
      playerOptions.forEach(option => {
          option.addEventListener('click',function() {
              const move = document.querySelector('.move');
              moves++;
              move.innerText = `Moves: ${moves}`;

              const choiceNumber = Math.floor(Math.random()*3);
              const computerChoice = computerOptions[choiceNumber];

              // Function to check who wins
              winner(this.innerText,computerChoice)

              // Calling gameOver function after score of 5 reached
              if (playerScore === 5 || computerScore === 5) {
                  gameOver(playerOptions, move);
              }
          })
      })
  }

  // Function to decide winner
  const winner = (player,computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');
      const tieScoreBoard = document.querySelector('.t-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
          result.textContent = 'Tie'
          tieScore++;
          tieScoreBoard.textContent = tieScore
      } else if (player == 'rock') {
          if (computer == 'paper') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else { 
              result.textContent = 'Player Won'
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'scissors') {
          if (computer == 'rock') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      } else if (player == 'paper') {
          if (computer == 'scissors') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  }

  // Function to run when game is over
  const gameOver = (playerOptions, move) => {
      const chooseMove = document.querySelector('.gameOverDisplay');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      playerOptions.forEach(option => {
          option.style.display = 'none';
      })

      chooseMove.innerText = 'Game Over';
      move.style.display = 'flex';
      chooseMove.style.fontSize = '1.5rem';
      chooseMove.style.color = 'gray';


      if (playerScore > computerScore) {
          result.style.fontSize = '2rem';
          result.innerText = 'You Won The Game!'
          result.style.color = '#308D46';
      } else if (playerScore < computerScore) {
          result.style.fontSize = '2rem';
          result.innerText = 'You Lost The Game :(';
          result.style.color = 'red';
      } else {
          result.style.fontSize = '2rem';
          result.innerText = 'Tie';
          result.style.color = 'grey'
      }

      reloadBtn.innerText = 'Play Again!';
      reloadBtn.style.display = 'flex'
      reloadBtn.addEventListener('click',() => {
          window.location.reload();
      })
  }

  // Calling playGame function inside game
  playGame();
}

// Calling the game function
game();