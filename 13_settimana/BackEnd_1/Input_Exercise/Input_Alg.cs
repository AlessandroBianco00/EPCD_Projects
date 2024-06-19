using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Input_Exercise
{
    internal class Input_Alg
    {
        private string[] nameArray = ["Giovanni", "Riccardo", "Filippo", "Federico", "Luca", "Giacomo"];
        public void CercaNome(string name)
        {
            bool nameFound = false;
            for (int i = 0; i < nameArray.Length; i++)
            {
                // if (nameArray[i].Equals(name)) { nameFound = true; } suggerimento tab
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
            int[] numberArray = new int[len];
            int media = 0;
            int sommaTotale = 0;
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
