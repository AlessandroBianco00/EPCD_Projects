namespace Input_Exercise
{
    internal class Program
    {
        
        static void Main(string[] args)
        {
            Input_Alg prova = new Input_Alg();
            Console.WriteLine("CercaNome");
            prova.CercaNome();

            Console.WriteLine();
            Console.WriteLine("Somma e Media");
            Alg3 alg = new Alg3();
            alg.InputArray(3);
        }
    }
}
