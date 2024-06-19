namespace Input_Exercise
{
    internal class Program
    {
        
        static void Main(string[] args)
        {
            Input_Alg prova = new Input_Alg();
            prova.CercaNome("Filippo");
            prova.CercaNome("Michele");
            prova.CercaNome("riccardo");

            Console.WriteLine();
            Alg3 alg = new Alg3();
            alg.InputArray(3);
        }
    }
}
