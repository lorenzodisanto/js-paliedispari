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

## Svolgimento Pari e Dispari

### funzione numero random

- creo funzione con numero min e max;
- dichiaro una variabile dove viene assegnato il numero random (math.random);
- return il numero generato;

### funzione pari

- creo funzione pari;
- se il numero diviso due da resto 0
  - return vero;
- altrimenti
  - return falso;

### foglio main

- chiedo all'utente pari o dispari;
- chiedo all'utente un numero da 1 a 5;
- genero numero del computer tramite la funzione numero random;
- sommo i due numeri;
- SE (la scelta dell'utente è pari && la funzione è vera) || (se la scelta dell'utente è dispari e la funzione è falsa)
  - ALLORA l'utente ha vinto;
- ALTRIMENTI ha vinto il computer;
- stampo il risultato;
