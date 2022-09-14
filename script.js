
//DOM elements
const restartButton = document.querySelector('#restart-button');
const guessInputs = document.querySelectorAll('.guess-input');
const tempGaugeHeatDiv = document.querySelector('#temp-gauge-heat-div');


//Constants
const MIN = 0;
const MAX = 100;


//Variables
let guessArray = Array();
let secretNumber = randomNumber(MIN, MAX);


//Functions

//Triggered when value accepted / tab or enter
function guess() {

  if (pushInputValue(this.value, guessArray)) {
    toggleGuessInputs(guessArray, guessInputs);
    updateDisplayBackground(guessArray, secretNumber, tempGaugeHeatDiv);
    // winner state
    if (checkWinner(secretNumber, guessArray)) {
      narrowHeatDisplay(secretNumber, tempGaugeHeatDiv);
      displayWon(guessInputs);
      return true;
    }
    if (checkLoser(guessArray)) {
      narrowHeatDisplay(secretNumber, tempGaugeHeatDiv);
      dispalyLost(secretNumber, guessInputs);
      return false;
    } // loser state
  }
}

//Triggered on restart button click
function restart() {
  secretNumber = randomNumber(MIN, MAX);
  clearGuessArray(guessArray);
  clearGuessValues(guessInputs);
  resetDisplayBackground(tempGaugeHeatDiv);
  toggleGuessInputs(guessArray, guessInputs);
  resetGuessPlaceholders(guessInputs);
}


//Event listeners
restartButton.addEventListener('click', restart);
guessInputs.forEach(e => e.addEventListener('input', verifyInputValue));
guessInputs.forEach(e => e.addEventListener('change', guess));


//Start on load
restart();


