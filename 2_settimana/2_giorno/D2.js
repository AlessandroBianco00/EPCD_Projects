/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*RISPOSTA 1*/

let a = 5;
let b = 9;
if (a > b) {
  console.log('a è maggiore di b');
} else if (a < b) {
  console.log('b è maggiore di a');
} else {
  console.log('a e b sono uguali');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*RISPOSTA 2*/

let c = 8;
if (c != 5) {
  console.log('not equal');
} /*else {
  console.log('equal');
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*RISPOSTA 3*/

let d = 24;
if (d%5 == 0) {
  console.log('d è un multiplo di 5');
} else {
  console.log('d non è un multiplo di 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*RISPOSTA 4*/
let e = 5;
let f = 3;
if (e == 8) {
  console.log('e è uguale a 8');
} else if (f == 8) {
  console.log('f è uguale a 8');
} else if (e + f == 8) {
  console.log('la somma di e ed f è uguale a 8');
} else if (e - f == 8 || f - e == 8) {
  console.log('la differenza di e ed f è uguale a 8');
} else {
  console.log('nessuna delle condizioni è verificata');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*RISPOSTA 5*/
let totalShoppingCart = 51;
let spesaCarrello;
if (totalShoppingCart > 50) {
  spesaCarrello = totalShoppingCart;
  console.log(spesaCarrello);
} else {
  spesaCarrello = totalShoppingCart + 10;
  console.log(spesaCarrello);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*RISPOSTA 6*/

let totalShoppingCart1 = 51;
let spesaCarrello1;
let blackFriday = true;
if (blackFriday) {
  totalShoppingCart1 = 0.8*totalShoppingCart1;
  if (totalShoppingCart1 > 50) {
    spesaCarrello1 = totalShoppingCart1;
    console.log(spesaCarrello1);
  } else {
    spesaCarrello1 = totalShoppingCart1 + 10;
    console.log(spesaCarrello1);
  }
} else {
  if (totalShoppingCart1 > 50) {
    spesaCarrello1 = totalShoppingCart1;
    console.log(spesaCarrello1);
  } else {
    spesaCarrello1 = totalShoppingCart1 + 10;
    console.log(spesaCarrello1);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*RISPOSTA 7*/
let g = 6;
let h = 81;
let i = 23.5;
if (g>=h && g>=i) {
  if (h<=i) {
    console.log('g è maggiore di h e i, mentre i è maggiore di h');
  } else {
    console.log('g è maggiore di h e i, mentre h è maggiore di i');
  }
} else if (i>=h && g<=i) {
  if (h<=g) {
    console.log('i è maggiore di h e g, mentre g è maggiore di h');
  } else {
    console.log('i è maggiore di h e g, mentre h è maggiore di g');
  }
} else {
  if (i<=g) {
    console.log('h è maggiore di i e g, mentre g è maggiore di i');
  } else {
    console.log('h è maggiore di i e g, mentre i è maggiore di g');
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*RISPOSTA 8*/

let j = 'numero';
if (typeof j == "number") {
  console.log('la variabile j è un numero');
} else {
  console.log('j non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*RISPOSTA 9*/
let k = 62;
if (k%2 == 0) {
  console.log('k è un numero pari');
} else if (k%2 == 1) {
  console.log('k è un numero dispari');
} else {
  console.log('k non è un numero intero o non è proprio un numero');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*RISPOSTA 10*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}*/

/*RISPOSTA 11*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*RISPOSTA 12*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*RISPOSTA 13*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*RISPOSTA 14*/

let array14 =[];
array14.push(1,2,3,4,5,6,7,8,9,10);
console.log(array14);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*RISPOSTA 15*/

array14.pop();
array14.push(100);
console.log(array14);

