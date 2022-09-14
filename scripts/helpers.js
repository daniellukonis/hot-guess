
function clearGuessArray(arr) {
  arr.splice(0);
}


function randomNumber(min, max) {
  return Math.floor((Math.random() * max) - min) + min;
}


function minMax(arr, num) {
  const max = arr
    .map(e => (Number(e)))
    .filter(e => e > num)
    .sort((a, b) => a - b)[0] || 100;

  const min = arr
    .map(e => (Number(e)))
    .filter(e => e < num)
    .sort((a, b) => b - a)[0] || 0;
  return [min, max];
}