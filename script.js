
//DOM elements
const tempGaugeDisplayDiv = document.querySelector('#temp-gauge-display-div');
const guessInput = document.querySelector('#guess-input');
const guessButton = document.querySelector('#guess-button');
const restartButton = document.querySelector('#restart-button');

//random number
const randomNumber = (min, max) => Math.floor((Math.random() * max) - min) + min;

//variables
let isGameOver = null;
let guessArray = null;
let displayArray = null;
let secretNumber = null;

//display functions

/*----------------------------*/
function resetDisplayArray() {
  displayArray = Array(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
  return true;
}


/*----------------------------*/
function updateDisplayBackground() {
  const max = guessArray.filter(e => e > secretNumber).sort((a, b) => a - b)[0] || 100;
  const maxShading = Math.abs(max - secretNumber);
  const min = guessArray.filter(e => e < secretNumber).sort((a, b) => b - a)[0] || 0;
  const minShading = Math.abs(min - secretNumber)
  
  tempGaugeDisplayDiv.style.background = `linear-gradient(90deg, #FFFFFF00 ${min}%, #F00 ${min + 2}%, #F00 ${max - 2}%, #FFFFFF00 ${max}%`;
}


/*----------------------------*/
function resetDisplayBackground() {
  tempGaugeDisplayDiv.style.background = '';
}


/*----------------------------*/
function updateInputPlaceholder(message) {
  guessInput.value = null;
  
  if(message){
    guessInput.placeholder = message;
    return false;
  }
false;
  
  guessInput.placeholder = guessArray.sort((a, b) => a - b);
}


//helper functions

/*----------------------------*/
function checkWinner() {
  if (guessArray.includes(secretNumber)) {
    isGameOver = true;
    updateInputPlaceholder(`You Win!`)

    return true;
  }
  return false;
}

/*----------------------------*/
function checkMaxGuesses() {
  if (guessArray.length >= 5) {
    isGameOver = true;
    updateInputPlaceholder(`Number was ${secretNumber}`);
    return true;
  }
  return false;
}

/*----------------------------*/
function submitGuess() {

  if (guessInput.value === '') {
    return false;
  }

  const currentGuess = Number(guessInput.value);

  if (currentGuess < 0 || currentGuess > 100) {
    return false;
  }
  if (guessArray.includes(currentGuess)) {
    return false;
  }
  guessArray.push(currentGuess);
  updateDisplayBackground();
  updateInputPlaceholder()
  return true;
}


//main functions

/*----------------------------*/
function guess() {
  if (!isGameOver) {
    submitGuess();
  }
  if(checkWinner()){
    return true;
  };
  checkMaxGuesses();
}

/*----------------------------*/
function gameReset() {
  isGameOver = false;
  guessArray = Array();
  secretNumber = randomNumber(0, 100);
  guessInput.value = null;
  resetDisplayArray();
  resetDisplayBackground()
  updateInputPlaceholder(`Guess 0 - 100`);
}

//event listeners
guessButton.addEventListener('click', guess);
restartButton.addEventListener('click', gameReset);

//start game
gameReset();