namespace BackEnd_1
{
    public class Atleta
    {
        string firstName;
        string lastName;
        string sport;
        int age;

        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { lastName = value; }
        }
        public string Sport
        {
            get { return sport; }
            set { sport = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }

        public void BriefIntroduction()
        {
            Console.WriteLine("Mi chiamo " + firstName + " " + lastName + " , e pratico " + sport);
        }

    }

    public class Dipendente
    {
        string firstName;
        string lastName;
        string company;
        string job;
        int age;

        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { lastName = value; }
        }
        public string Company
        {
            get { return company; }
            set { company = value; }
        }
        public string Job
        {
            get { return job; }
            set { job = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }
    }

    public class Animale
    {
        string species;
        string name;
        string habitat;

        public string Species
        {
            get { return species; }
            set { species = value; }
        }
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public string Habitat
        {
            get { return habitat; }
            set { habitat = value; }
        }

        public void HabitatInfo()
        {
            Console.WriteLine("The " + species + " lives in " + habitat);
        }
    }

    public class Car
    {
        string brand;
        string model;
        int price;
        string plate;
        string color;

        public string Brand
        {
            get { return brand; }
            set { brand = value; }
        }
        public string Model
        {
            get { return model; }
            set { model = value; }
        }
        public int Price
        {
            get { return price; }
            set { price = value; }
        }
        public string Plate
        {
            get { return plate; }
            set { plate = value; }
        }
        public string Color
        {
            get { return color; }
            set { color = value; }
        }

        public int KmPerRefill(int fuelLitres)
        {
            int kmLitres = 15;
            int totalKm = kmLitres * fuelLitres;
            return totalKm;
        }
    }

}