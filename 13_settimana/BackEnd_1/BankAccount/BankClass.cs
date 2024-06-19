﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccount
{
    internal class ContoCorrente
    {
        private string owner;
        private float saldo;
        private int operazioni;

        public string Owner { get { return owner; } }
        public float Saldo { get { return saldo; } set { saldo = value; } }
        public int Operazioni { get { return operazioni; } set { operazioni = value; } }

        public ContoCorrente(string owner, float saldo ) 
        {
            this.owner = owner;
            this.saldo = saldo;
            operazioni = 0;
            
        }

        public string Deposito(float amount)
        {
            Saldo = amount + saldo;
            return $"Hai versato {amount} $, il tuo saldo è {saldo} $";
        }

        public string Prelievo(float amount)
        {
            if (saldo < amount) { return "Fondi non sufficienti"; }
            Saldo = saldo - amount;
            return $"Hai prelevato {amount} $, il tuo saldo è {saldo} $";
        }
    }
}
