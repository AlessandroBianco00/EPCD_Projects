interface iCellphone {
    credit:number
    minutesOfCalls:number
}

class User implements iCellphone {
    firstname:string
    lastname:string
    credit:number
    minutesOfCalls:number
    minutePrice = 0.2

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
        if (this.credit < this.minutePrice) {
            //throw new Error('Credito insufficiente')
            console.log('Credito insufficiente')
        } else {
            this.minutesOfCalls += callDuration
            this.credit -= this.minutePrice*callDuration
        }
    }

    call404():string {
        return `Credito residuo: ${this.credit}`
    }

    getMInutesOfCalls():number {
        return this.minutesOfCalls
    }

    clearCalls():void {
        this.minutesOfCalls = 0
    }
}

const utente01 = new User('Mario', 'Rossi', 1.70, 57)

const utente02 = new User('Elisa', 'Russo', 0.19, 254)

console.log(utente01.call404())
console.log(utente01.getMInutesOfCalls())
console.log(utente02.call404())
console.log(utente02.getMInutesOfCalls())

utente01.ricaricaTelefonica(0.53)
utente02.makeACall(2)
utente01.makeACall(3)
console.log(utente01)
console.log(utente02)
utente01.clearCalls()
console.log(utente01)