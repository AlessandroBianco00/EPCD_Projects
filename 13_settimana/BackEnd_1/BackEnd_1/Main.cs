using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd_1
{
    internal class Programm
    {
        public static void Main(string[] args)
        {
            Atleta Lebron = new Atleta();
            Lebron.FirstName = "Lebron";
            Lebron.LastName = "James";
            Lebron.Sport = "Basketball";
            Lebron.Age = 40;

            Lebron.BriefIntroduction();

            Dipendente Dipendente1 = new Dipendente();
            Dipendente1.FirstName = "Mario";
            Dipendente1.LastName = "Rossi";
            Dipendente1.Company = "Tetrapack";
            Dipendente1.Job = "Junior Developer";
            Dipendente1.Age = 40;

            Console.WriteLine(Dipendente1.FirstName, Dipendente1.LastName, Dipendente1.Job);

            Animale OrsoPolare = new Animale();
            OrsoPolare.Species = "Polar bear";
            OrsoPolare.Name = "Pippo";
            OrsoPolare.Habitat = "South Pole";

            OrsoPolare.HabitatInfo();

            Car Panda = new Car();
            Panda.Brand = "Fiat";
            Panda.Model = "Panda";
            Panda.Color = "White";
            Panda.Price = 13000;
            Panda.Plate = "AA000AA";

            Console.WriteLine(Panda.KmPerRefill(40));
        }
    }
}
