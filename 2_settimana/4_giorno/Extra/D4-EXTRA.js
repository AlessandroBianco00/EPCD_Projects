// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom(n) {
    if (typeof n !== 'number') {
        return 'Inserisci un numero';
    } else {
        let parametri = parseInt(n)
        let numArray = [];
        for (let i = 0; i < parametri; i++) {
            numArray.push(Math.round(Math.random()*10))
        }
        return numArray;
    }
}

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(n) {
    if ( typeof n !== "number") {
        n = 1;
    }
    let numArray = giveMeRandom(n);
    let numeriGrandi = [];
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > 5) {
            console.log(numArray[i] + ' è maggiore di 5')
            numeriGrandi.push(numArray[i]);
        } else {
            console.log(numArray[i] + ' è minore o uguale di 5')
        }
    }
    let sommaGrande = 0;
    for (let i = 0; i < numeriGrandi.length; i++) {
        sommaGrande += numeriGrandi[i];
    }
    return sommaGrande;

}
console.log(checkArray(10));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
    {
        price : 15,
        name : 'astuccio',
        id : '1234',
        quantity : 1
    },
    {
        price : 8,
        name : 'headphones',
        id : '0042',
        quantity : 1
    },
    {
        price : 9,
        name : 'forchettone',
        id : '2048',
        quantity : 2
    },
    {
        price : 25,
        name : 'portafoglio',
        id : '0911',
        quantity : 1
    },
    {
        price : 5,
        name : 'maglietta',
        id : '1984',
        quantity : 3
    }
]


/* SCRIVI QUI LA TUA RISPOSTA */

function shoppingCartTotal(cart) {
    let totale = 0;
    for (let i = 0; i < cart.length; i++) {
        let prodotto = cart[i]
        totale += prodotto.price * prodotto.quantity
    }
    return totale;
}
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(obj) {
    shoppingCart.push(obj);
    return shoppingCart.length;
}
console.log(addToShoppingCart({price : 2, name : 'calzini', id : '2007', quantity : 4}))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(cart) {
    let objCostoso = {price: 0};
    for (i = 0; i < cart.length; i++) {
        if (cart[i].price >= objCostoso.price) {
            objCostoso = cart[i];
        }
    }
    return objCostoso;
}
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(cart) {
    if (cart.length > 0) {
        return cart[cart.length - 1];
    }
    
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function loopUntil(n) {
    let confronto = [0, 0, 0]
    let i = confronto.length - 1;
    while (confronto[i-2] < n || confronto[i-1] < n || confronto[i] < n) {
        confronto.push(Math.floor(Math.random()*10))
        i = confronto.length - 1;
        console.log(confronto[i]);
    }
}
loopUntil(2);*/

function loopUntil(n) {
    if ( typeof n === "number" && n >= 0 && n <= 9) {
         m = parseInt(n);
         let i = 0;
         conteggio = 0;
         while (conteggio < 3) {
            i = Math.floor(Math.random()*10);
            console.log(i)
            if (i > m) {
                conteggio += 1;  
            } else {
                conteggio = 0;
            }
         }
    } else {
        console.log('Il numero inserito non è compreso tra 0 e 9 inclusi')
    }
}
loopUntil(2);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(array) {
    let sommaTotale = 0;
    let addendi = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sommaTotale += array[i];
            addendi++;
        }
    }
    return sommaTotale/addendi;
}
let arrayProva = [1, 3, 15, 'aramaico', 64, undefined, 7.5];
console.log(average(arrayProva));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(array) {
    let piuLunga = '';
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' && array[i].length > piuLunga.length) {
            piuLunga = array[i];
        }
    }
    return piuLunga;
}
let arrayParole = ['esofago', 'fagiolo', 'arma', undefined, 'grattacielo', 'serramanico', 'ape']
console.log(longest(arrayParole));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antispam(emailContent) {
    if (typeof emailContent !== 'string') {
        return 'Inserisci un email (stringa)';
    } else {
        let verifica = ';'
        if ( emailContent.includes('spam') || emailContent.includes('scam')) {
            verifica = true;
        } else {
            verifica = false;
        }
        return verifica;
    }
}
console.log(antispam('scamarsiono'));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
    let matrixArr = []
    if (typeof x !== 'number' || typeof x !== 'number') {
        return 'inserisci 2 numeri';
    } else {
        for (let j = 0; j < y; j++) {
            let ascisse = j;
            for (let i = 0; i < x; i++) {
                let ordinate = i;
                matrixArr.push('' + j + i);
            }
        }
        return matrixArr;
    }
}
console.log(matrixGenerator(3,4));