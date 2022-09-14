//Updates display of guess values
function toggleGuessInputs(arr, elements) {
  disableGuessInputs(elements);

  if (arr.length < 5) {
    elements[arr.length].removeAttribute("disabled");
    elements[arr.length].setAttribute("required", "true");
    elements[arr.length].focus();
  }
}

//Disable inputs
function disableGuessInputs(elements) {
  elements.forEach(e => {
    e.removeAttribute("required");
    e.setAttribute("disabled", "true");
  })
}

//Clears guess values
function clearGuessValues(elements) {
  elements.forEach(e => e.value = null);
}

//Reset placeholders
function resetGuessPlaceholders(elements) {
  elements.forEach(e => { e.placeholder = "#" });
}


//Heat display
function updateDisplayBackground(arr, num, element) {
  const endPoints = minMax(arr, num);
  min = endPoints[0];
  max = endPoints[1];


  element.style.background = `linear-gradient(90deg, #FFFFFF00 ${min}%, #F00 ${min + 2}%, #F00 ${max - 2}%, #FFFFFF00 ${max}%`;
}


//Narrow heat display for win / lost
function narrowHeatDisplay(num, element) {
  element.style.background = `linear-gradient(90deg, #FFFFFF00 ${num - 1}%, #F00 ${num}%, #FFFFFF00 ${num + 1}%`;
}


//Reset heat display
function resetDisplayBackground(element) {
  element.style.background = '';
}


//Game won display
function displayWon(elements) {
  const text = ` WIN `;
  clearGuessValues(elements)
  elements.forEach((e, i) => { e.placeholder = text[i] });
  disableGuessInputs(elements);
}


//Game lost display
function dispalyLost(num, elements) {
  const text = ['L', 'O', 'S', 'T', num];
  clearGuessValues(elements)
  elements.forEach((e, i) => { e.placeholder = text[i] });
  disableGuessInputs(elements);
}