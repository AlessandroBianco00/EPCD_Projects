namespace BankAccount
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ContoCorrente myBankAccount = new ContoCorrente("Mario Rossi", 2034);

            Console.WriteLine(myBankAccount.Saldo);
            Console.WriteLine(myBankAccount.Deposito(150));
            Console.WriteLine(myBankAccount.Prelievo(300));
            Console.WriteLine(myBankAccount.Prelievo(3000));
            Console.WriteLine(myBankAccount.Saldo);

        }
    }
}
