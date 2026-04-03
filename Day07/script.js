let attempt = 0;
let winningMassage = "";

function numberGuessingGame() {
  const computerNumber = Math.floor(Math.random() * 10) + 1;
  let userNumber = Number(prompt("Select a number 1 - 10"));
  attempt++;
  if (userNumber !== computerNumber) {
    if (userNumber < computerNumber) {
      alert(` Your number is  Too low .  Your have used ${attempt} attemp`);
    } else {
      // console.log("Too high");
      alert(` Your number is  Too high . Your have used ${attempt} attemp`);
    }
  }
  if (userNumber === computerNumber) {
    winningMassage = `You successfully guessed the number in ${attempt} attempts`;
  }

  // attempt++;

  if (winningMassage) {
    alert(winningMassage);
    attempt = 0;
  }

  const isPlayAgain = prompt("Do you want to play again? yes/no");

  if (isPlayAgain === "yes") {
    numberGuessingGame();
  }
}

numberGuessingGame();
