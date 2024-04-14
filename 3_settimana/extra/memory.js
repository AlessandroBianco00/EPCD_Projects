window.onload = function () {
    creaCaselle();
    let bottone = document.querySelector('#ricomincia');
    bottone.addEventListener('click', refresh)
}

let arrayValori = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];


function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }
// CREA LE CASELLE 

const creaCaselle = () => {
    var staiBarando = false 
    let tavolo = document.getElementById('tavolo');
    let valoriCaselle = [...arrayValori];
    shuffleArray(valoriCaselle);
    for (let i = 0; i < 24; i++) {
        let singolaCasella = document.createElement('div');
        let valore = document.createElement('p');
        valore.innerHTML = valoriCaselle.pop();
        valore.classList.add('nascosta');
        singolaCasella.appendChild(valore);
        singolaCasella.classList.add('tessere');
        singolaCasella.addEventListener('click', function () { // SCOPRI TESSERE
            if (!staiBarando) {
                staiBarando = true;
                valore.classList.remove('nascosta');
                valore.classList.add('scoperta');
                let celleScoperte = document.getElementsByClassName('scoperta')
                if (celleScoperte.length === 2) {
                    if (celleScoperte[0].innerHTML === celleScoperte[1].innerHTML) {
                        for (let x = celleScoperte.length-1; x >= 0; x--) {
                            celleScoperte[x].classList.add('evidenziata');
                            celleScoperte[x].classList.remove('scoperta');
                        }
                        staiBarando = false;
                    } else {
                            function coppiaSbagliata() {
                                celleScoperte[1].classList.add('nascosta');
                                celleScoperte[1].classList.remove('scoperta');
                                celleScoperte[0].classList.add('nascosta');
                                celleScoperte[0].classList.remove('scoperta');
                                staiBarando = false;
                            }
                            setTimeout(coppiaSbagliata, 1000);
                    }
                } else {
                    staiBarando = false;
                }
            } else {
                console.log('Aspetta a cliccare')
            }
        })
        tavolo.appendChild(singolaCasella);
    }

}

//TIMER
let secondi = 0;
let minuti = 0;
function timer() {
    let pOrario = document.querySelector('#tempo');
    secondi += 1;
    if (secondi === 60) {
        secondi = 0;
        minuti += 1;
    }
    pOrario.innerHTML = `Tempo: ${minuti}:${secondi}`
}
setInterval(timer, 1000)
// REFRESH
 const refresh = () => {
    let tavolo = document.getElementById('tavolo');
    tavolo.innerHTML = '';
    creaCaselle();
    minuti = 0;
    secondi = 0;

 }
