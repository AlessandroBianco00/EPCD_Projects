/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*RISPOSTA 1
I dati JS si dividono in 2 tipi: dati semplici e complessi. I dati semplici sono di 5 tipi, mentre siste solo un dato complesso: gli Oggetti.
Il primo dato semplice sono le stringhe, sono racchiuse da apici (semplici o doppi) e contengono caratteri. Vengono generalmente utilizzati per contenere dei testi.
I secondi sono dati numerici, sono appunto numeri (di vario tipo: intero, negativo, ...). Permettono di effettuare le varie operazioni numeriche.
Il terzo tipo sono dati booleani, possono essere true o false (vero o falso), sono generalmente utilizzati nella logica condizionale (codici if-else, cicli while e for)
Il quarto tipo di dato è il null, ha un unico valore: null. E' diverso da lo 0 numerico e la stinga vuota ''.
L'ultimo dato semplice è l'undefined, anche esso a valore unico: undefined. Non ha valore
L'unico dato complesso, l'oggetto, comprende tutti i dati che non sono semplici, come array, funzioni, ecc...
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*RISPOSTA 2*/
var myName = 'Alessandro';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*RISPOSTA 3*/
console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*RISPOSTA 4*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*RISPOSTA 5*/
var myName = 'Bianco';
console.log(myName);
const GRAVITA = 9.81;
/*const GRAVITA = 9.9; genera errore nella console (poichè const permette di dichiarare la costante una sola volta */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*RISPOSTA 6*/
console.log(4-x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*RISPOSTA 7*/
let name1 = 'john';
let name2 = 'John';
console.log(name1==name2);
console.log(name1.toLowerCase==name2.toLowerCase);
console.log(name2); /*verifica name2 = John*/