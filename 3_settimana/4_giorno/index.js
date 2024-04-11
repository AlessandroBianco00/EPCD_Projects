
let numeroCaselle = 76;
let arrTombola = [];
let caselleCartella = 24;

/*GENERO IL TABELLONE*/

const creaCaselle = function (quanteCaselle) {
    tabelloneDiv = document.getElementById('tabellone');
    for (let i = 0; i < quanteCaselle; i++) {
        arrTombola.push(i+1);
        let singolaCasella = document.createElement('div');
        singolaCasella.classList.add('caselle');
        singolaCasella.innerHTML = arrTombola[i];
        tabelloneDiv.appendChild(singolaCasella);
    }
}
creaCaselle(numeroCaselle);

/*FUNZIONE PER ESTRARRE, RICHIAMATA SUL FONDO*/

const estraiNumero = function () {
    let risultatoPar = document.getElementById('risultato');
    //let indiceMassimo = arrTombola.length; NON USATO
    if (arrTombola.length<1) {
        risultatoPar.innerHTML = 'Hai estratto tutti i numeri';
    } else {
        let indiceTombola = Math.ceil(Math.random()*arrTombola.length);
        let num1 = arrTombola.splice(indiceTombola-1,1);
        let num = num1[0];
        console.log(num);
        risultatoPar.innerHTML = 'Numero : ' + num;
        /*for (let j = 0; j < numeroCaselle; j++ ) {
            let numeroCorrente = document.querySelectorAll('.caselle')[j];
            if (num === j+1) { 
                numeroCorrente.classList.add('estratto');
            }
        }*/
        let numeroCorrente = document.querySelectorAll('.caselle')[num-1];
        numeroCorrente.classList.add('estratto');

        let caselleGiocatore = document.getElementsByClassName('caselleMie');
        console.log(caselleGiocatore.length);
        for (let k = 0; k < caselleGiocatore.length; k++) {
            console.log(caselleGiocatore[k].innerHTML)
            if (num == caselleGiocatore[k].innerHTML) {
                /*let casellaEstratta = document.querySelectorAll('.caselleMie')[k];*/
                console.log('il valore '+ num + 'è nella casella' + k)
                caselleGiocatore[k].classList.add('estratto');
            }
        }
    }
    
}

/*GENERO ARRAY PADRE PER LE CARTELLE*/
let arrayRiferimento = [];
for (let i = 0; i < numeroCaselle; i++) {
    arrayRiferimento.push(i+1)
}
console.log(arrayRiferimento);

const generaCartella = function () {
    let footer = document.querySelector('footer');
    let cartella = document.createElement('div');
    cartella.classList.add('cartelle');
    let arrayCartella = arrayRiferimento;
    for (let i = 0; i < caselleCartella; i++) {
        let indiceTombola = Math.ceil(Math.random()*arrayRiferimento.length);
        let num3 = arrayCartella.splice(indiceTombola-1, 1);
        let num2 = num3[0];
        let miaCasella = document.createElement('div')
        miaCasella.classList.add('caselleMie');
        miaCasella.innerHTML = num2;
        cartella.appendChild(miaCasella);
    }
    footer.appendChild(cartella);
}

/* CONTINUARE CON VERIFICA CARTELLE*/



let bottoneNumero = document.getElementById('estrazione');
bottoneNumero.addEventListener('click', estraiNumero);

let bottoneCartelle = document.getElementById('dammeUna');
bottoneCartelle.addEventListener('click', generaCartella);