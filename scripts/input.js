//Input verfication triggers when typed
function verifyInputValue() {
  if (this.value.length > 3) { this.value = '100' }
  if (this.value.length > 1 && this.value[0] === '0') { this.value = this.value.slice(1) }
  if (this.value > 100) { this.value = '100' }
  if (this.value < 0) { this.value = '0' }
}


//Value data pushed to array
function pushInputValue(value, arr, num) {
  if (arr.length > 5) { return false }
  if (arr.includes(value)) { return false }
  const endPoints = minMax(arr, num);
  const min = endPoints[0];
  const max = endPoints[1];
  //validate endpoints
  arr.push(Number(value).toString());
  return true;
}


//Check winner
function checkWinner(value, arr) {
  if (arr.includes(String(value))) { return true }
  return false;
}


//Check loser
function checkLoser(arr) {
  if (arr.length > 4) {
    return true;
  }
  return false;
}