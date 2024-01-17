function palindrome(word) {
  let character;
  let wordReverse = "";

  let i = word.length - 1;
  while (i >= 0) {
    character = word[i];
    wordReverse += character;
    i--;
  }
  // console.log(wordReverse);

  if (word == wordReverse) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
  return word;
}
