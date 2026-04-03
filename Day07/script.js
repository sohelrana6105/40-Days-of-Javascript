let attempt = 0;

function numberGuessingGame() {
  const computerNumber = Math.floor(Math.random() * 10) + 1;

  let userNumber = Number(prompt("Select a number 1 - 10"));

  while (userNumber !== computerNumber) {
    attempt++;

    if (userNumber < computerNumber) {
      alert("Too low");
    } else {
      alert("Too high");
    }

    userNumber = Number(prompt("Try again"));
  }

  attempt++;

  alert(`You successfully guessed the number in ${attempt} attempts`);

  const isPlayAgain = prompt("Do you want to play again? yes/no");

  if (isPlayAgain === "yes") {
    attempt = 0;
    numberGuessingGame();
  }
}

numberGuessingGame();
