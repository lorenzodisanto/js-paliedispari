const sumNumber = document.getElementById("sum-number");
const resultNumber = document.getElementById("result");

const choise = prompt("Scegli pari o dispari");
console.log("L'utente sceglie " + choise);
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il numero dell'utente é " + userNumber);

const computerNumber = genRandomNumber(1, 5);
console.log("Il numero del computer é " + computerNumber);

const sum = userNumber + computerNumber;
console.log("La somma dei due numeri è " + sum);
sumNumber.innerText = "La somma dei due numeri è " + sum;

console.log("La somma dei numeri è pari? " + iseven(sum));

if (
  (choise == "pari" && iseven(sum) == true) ||
  (choise == "dispari" && iseven(sum) == false)
) {
  console.log("L'utente ha vinto");
  resultNumber.innerText = "L'utente ha vinto";
} else {
  console.log("Il computer ha vinto");
  resultNumber.innerText = "Il computer ha vinto";
}
