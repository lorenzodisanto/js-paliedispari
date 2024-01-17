# Paliedispari

nome repo: js-paliedispari

## Palindroma

Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Pari e Dispari

L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

## Svolgimento Palindroma

### foglio funzione

- creo funzione;
- dichiaro le variabili parola, carattere, parola inversa;
- apro ciclo WHILE con (i=lunghezzaparola e continuo il ciclo fino a i>=0);
  - aggiungo il carattere della parola nella variabile parola inversa
  - decremento la i;
- esco dal ciclo while;
- SE la parola risulta uguale alla parola inversa
  - ALLORA la parola è palindroma;
- chiudo funzione;

### foglio main

- inserisco prompt dove chiedo la parola;
- assegno a una costante la funzione palindroma;
- stampo
