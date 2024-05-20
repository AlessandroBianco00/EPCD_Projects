"use strict";
class User {
    constructor(_firstname, _lastname, _credit, _minutesOfCalls) {
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.credit = _credit;
        this.minutesOfCalls = _minutesOfCalls;
    }
    ricaricaTelefonica(importo) {
        this.credit += importo;
    }
    makeACall(callDuration) {
        if (this.credit < 0.20) {
            //throw new Error('Credito insufficiente')
            console.log('Credito insufficiente');
        }
        else {
            this.minutesOfCalls += callDuration;
            this.credit -= 0.20 * callDuration;
        }
    }
    call404() {
        return this.credit;
    }
    getMInutesOfCalls() {
        return this.minutesOfCalls;
    }
    clearCalls() {
        this.minutesOfCalls = 0;
    }
}
const Utente01 = new User('Mario', 'Rossi', 1.70, 57);
console.log(Utente01);
const Utente02 = new User('Elisa', 'Russo', 0.19, 254);
console.log(Utente02);
Utente01.ricaricaTelefonica(0.53);
Utente01.getMInutesOfCalls();
Utente02.makeACall(2);
Utente01.makeACall(3);
Utente01.call404();
console.log(Utente01);
console.log(Utente02);
Utente01.clearCalls();
console.log(Utente01);
