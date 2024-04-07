/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
    if (typeof l1 === 'number' && typeof l2 === 'number') {
        let a = l1 * l2;
        return a;
    } else {
        return 'Non hai inserito due numeri';
    }
    
}
console.log(area(4, 7.5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(l1, l2) {
    if (typeof l1 === 'number' && typeof l2 === 'number') {
        let L1 = parseInt(l1);
    let L2 = parseInt(l2);
    let LL;
    if (L1 !== L2) {
        return LL = L1 + L2;
    } else {
        return LL = 3 * L1;
    }
    } else {
        return 'Non hai inserito due numeri';
    }
    
}
console.log(crazySum(2, 6));
console.log(crazySum(6, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(l1) {
    if (typeof l1 === 'number') {
        cDiff = l1 -19;
        if (cDiff < 0) {
            return -cDiff;
        } else {
            return cDiff * 3;
        }
    } else {
        return 'Non hai inserito un numero';
    }
}
console.log(crazyDiff(18));
console.log(crazyDiff(27));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (typeof n === "number") {
            let N = parseInt(n);
        if (N === 400 || N > 20 && N <= 100) {
            return true;
        } else {
            return false;
    }
    } else {
        return 'Non hai inserito un numero';
    }
}
console.log(boundary(45));
console.log(boundary(345));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    if (typeof str === 'string') {
        if (str.startsWith('EPICODE')) {
            return str;
        } else {
            return 'EPICODE' + str;
        }
    } else {
        return 'Non hai inserito una stringa';
    }
}
console.log(epify('EPICODE_corso'));
console.log(epify('Guts'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if (typeof n === 'number' && n > 0) {
        if (n%3 === 0 || n%7 === 0) {
            return true;
        } else {
            return false;
    }
    } else {
        return 'Non hai inserito un numero positivo';
    }
}
console.log(check3and7(49));
console.log(check3and7(82));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    if (typeof str !== 'string') {
        return 'Non hai inserito una stringa';
    } else {
        let capovolta = '';
        for (let i = str.length; i > 0; i--) {
            capovolta += str[i-1];
        }
        return capovolta;
    }
}
console.log(reverseString('Accattivante'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(f) {
    if (typeof f !== 'string') {
        return 'Non hai inserito una stringa';
    } else {
        let correttore = '';
        for (let i = 0; i < f.length; i++) {
            if (i === 0) {
                correttore += f[i];
            } else if (f[i-1] === ' ') {
                correttore += f[i].toUpperCase()
            } else {
                correttore += f[i];
            }
        }
        return correttore;
    }
}
console.log(upperFirst('posso selezionare elementi html'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    if (typeof str !== 'string') {
        return 'Non hai inserito una stringa';
    } else {
        let strAccorciata = '';
        for (let i = 0; i < str.length; i++) {
            if (i !== 0 && i !== str.length-1) {
                strAccorciata += str[i]
            }
        }
        return strAccorciata;
    }
}
console.log(cutString('Asuka'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

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
console.log(giveMeRandom(7.7));