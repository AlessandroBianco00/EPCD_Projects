using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Input_Exercise
{
    internal class Input_Alg
    {
        public void CercaNome()
        {
            int arrayLenght = 4;
            string[] nameArray = new string[arrayLenght];
            bool nameFound = false;
            for (int i = 0; i < arrayLenght; i++)
            {
                nameArray[i] = Console.ReadLine();
            }
            Console.WriteLine("Nome da Cercare");
            string name = Console.ReadLine();
            for (int i = 0; i < arrayLenght; i++)
            {
                if (nameArray[i].ToLower() == name.ToLower()) { nameFound = true; }
            }
            
            if (!nameFound) { Console.WriteLine($"Il nome {name} non è stato trovato"); }
            else { Console.WriteLine($"Il nome {name} è presente nell'array"); }
        }
    }

    class Alg3
    {
        public int InputArray(int len)
        {
            Console.WriteLine("Dimensione Array:");
            len = int.Parse(Console.ReadLine());
            int[] numberArray = new int[len];
            int media = 0;
            int sommaTotale = 0;
            Console.WriteLine("Elementi array:");
            for (int i = 0; i < len; i++)
            {
                numberArray[i] = int.Parse(Console.ReadLine());
                sommaTotale += numberArray[i];
            }
            media = sommaTotale/len;
            Console.WriteLine(sommaTotale);
            Console.WriteLine( media);
            return sommaTotale;
        }
    }
}
