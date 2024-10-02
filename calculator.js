let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function guessNumber() {
  while (attemptsLeft > 0) {
    let userGuess = prompt("Guess a number between 1 and 100:");
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
      alert(`Congratulations! You guessed the correct number ${randomNumber}.`);
      break;
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert("Too low! Try again.");
    }

    attemptsLeft--;

    if (attemptsLeft === 0) {
      alert(`Game over! The correct number was ${randomNumber}.`);
    }
  }
}

// Start the game
guessNumber();
