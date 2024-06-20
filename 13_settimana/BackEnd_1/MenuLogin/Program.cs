namespace MenuLogin
{
    namespace ConsoleApp
    {
        class Program
        {
            static void Main(string[] args)
            {
                while (true)
                {
                    Console.Clear();
                    Console.WriteLine("===============OPERAZIONI==============");
                    Console.WriteLine("Scegli l'operazione da effettuare:");
                    Console.WriteLine("1.: Login");
                    Console.WriteLine("2.: Logout");
                    Console.WriteLine("3.: Verifica ora e data di login");
                    Console.WriteLine("4.: Lista degli accessi");
                    Console.WriteLine("5.: Esci");
                    Console.WriteLine("========================================");

                    var choice = Console.ReadLine();
                    switch (choice)
                    {
                        case "1":
                            Login();
                            break;
                        case "2":
                            Logout();
                            break;
                        case "3":
                            VerificaOraEDataDiLogin();
                            break;
                        case "4":
                            ListaDegliAccessi();
                            break;
                        case "5":
                            return;
                        default:
                            Console.WriteLine("Scelta non valida. Premere un tasto per continuare...");
                            Console.ReadKey();
                            break;
                    }
                }
            }

            static void Login()
            {
                Console.Clear();
                Console.WriteLine("===== Login =====");
                Console.Write("Inserisci username: ");
                var username = Console.ReadLine();
                Console.Write("Inserisci password: ");
                var password = Console.ReadLine();
                Console.Write("Conferma password: ");
                var confirmPassword = Console.ReadLine();

                if (Utente.Login(username, password, confirmPassword))
                {
                    Console.WriteLine("Login effettuato con successo!");
                }
                else
                {
                    Console.WriteLine("Login fallito. Verifica le credenziali e riprova.");
                }

                Console.WriteLine("Premere un tasto per continuare...");
                Console.ReadKey();
            }

            static void Logout()
            {
                Console.Clear();
                if (Utente.Logout())
                {
                    Console.WriteLine("Logout effettuato con successo!");
                }
                else
                {
                    Console.WriteLine("Nessun utente è attualmente autenticato.");
                }

                Console.WriteLine("Premere un tasto per continuare...");
                Console.ReadKey();
            }

            static void VerificaOraEDataDiLogin()
            {
                Console.Clear();
                var dataLogin = Utente.VerificaOraEDataDiLogin();
                if (dataLogin.HasValue)
                {
                    Console.WriteLine($"Ora e data di login: {dataLogin.Value}");
                }
                else
                {
                    Console.WriteLine("Nessun utente è attualmente autenticato.");
                }

                Console.WriteLine("Premere un tasto per continuare...");
                Console.ReadKey();
            }

            static void ListaDegliAccessi()
            {
                Console.Clear();
                var accessi = Utente.ListaDegliAccessi();
                if (accessi.Count > 0)
                {
                    Console.WriteLine("Lista degli accessi:");
                    foreach (var accesso in accessi)
                    {
                        Console.WriteLine(accesso);
                    }
                }
                else
                {
                    Console.WriteLine("Nessun accesso effettuato finora.");
                }

                Console.WriteLine("Premere un tasto per continuare...");
                Console.ReadKey();
            }
        }
    }

    static class Utente
    {
        private static string _username;
        private static DateTime? _loginTime;
        private static List<DateTime> _accessi = new List<DateTime>();

        public static bool Login(string username, string password, string confirmPassword)
        {
            if (string.IsNullOrEmpty(username) || password != confirmPassword)
            {
                return false;
            }

            _username = username;
            _loginTime = DateTime.Now;
            _accessi.Add(_loginTime.Value);

            return true;
        }

        public static bool Logout()
        {
            if (string.IsNullOrEmpty(_username))
            {
                return false;
            }

            _username = null;
            _loginTime = null;
            return true;
        }

        public static DateTime? VerificaOraEDataDiLogin()
        {
            return _loginTime;
        }

        public static List<DateTime> ListaDegliAccessi()
        {
            return new List<DateTime>(_accessi);
        }
    }
}
