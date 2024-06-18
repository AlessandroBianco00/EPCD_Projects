using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonaEsercizio
{
    internal class MainPersona
    {
        public static void Main(string[] args) 
        {
            Persona random = new Persona();

            Persona marioRossi = new Persona("Mario", "Rossi", 35);

            Console.Write(random.GetNome());
            Console.Write(" ");
            Console.Write(random.GetCognonome());
            Console.Write(" di anni ");
            Console.Write(random.GetEta());
            Console.WriteLine("");

            Console.WriteLine(marioRossi.GetDettaglio());
        }
    }
}
