interface Cellphone {
    credit:number
    minutesOfCalls:number
}

class User implements Cellphone {
    firstname:string
    lastname:string
    credit:number
    minutesOfCalls:number

    constructor(_firstname:string, _lastname:string, _credit:number, _minutesOfCalls:number) {
        this.firstname = _firstname
        this.lastname = _lastname
        this.credit = _credit
        this.minutesOfCalls = _minutesOfCalls
    }

    ricaricaTelefonica(importo:number):void {
        this.credit += importo
    }

    makeACall(callDuration:number):void {
        if (this.credit < 0.20) {
            //throw new Error('Credito insufficiente')
            console.log('Credito insufficiente')
        } else {
            this.minutesOfCalls += callDuration
            this.credit -= 0.20*callDuration
        }
    }

    call404():number {
        return this.credit
    }

    getMInutesOfCalls():number {
        return this.minutesOfCalls
    }

    clearCalls():void {
        this.minutesOfCalls = 0
    }
}

const Utente01 = new User('Mario', 'Rossi', 1.70, 57)
console.log(Utente01)

const Utente02 = new User('Elisa', 'Russo', 0.19, 254)
console.log(Utente02)

Utente01.ricaricaTelefonica(0.53)
Utente01.getMInutesOfCalls()
Utente02.makeACall(2)
Utente01.makeACall(3)
Utente01.call404()
console.log(Utente01)
console.log(Utente02)
Utente01.clearCalls()
console.log(Utente01)