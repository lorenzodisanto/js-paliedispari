// funzione numero random
function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// funzione numero pari
function iseven(num) {
  let result = num % 2;
  if (result == 0) {
    return true;
  } else {
    return false;
  }
}
