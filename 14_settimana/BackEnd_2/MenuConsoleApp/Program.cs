﻿namespace MenuConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            OrderFood();
        }

        class Product
        {
            public string ProductName { get; set; }
            public float ProductPrice { get; set; }

        }

        static void OrderFood()
        {
            List<Product> ordersList = new List<Product>();
            while (true)
            {
                Console.Clear();
                Console.WriteLine("==============MENU==============");
                Console.WriteLine("1: Coca Cola 150 ml ($ 2.50)");
                Console.WriteLine("2: Insalata di pollo ($ 5.20)");
                Console.WriteLine("3: Pizza Margherita ($ 10.00)");
                Console.WriteLine("4: Pizza 4 Formaggi ($ 12.50)");
                Console.WriteLine("5: Pz patatine fritte ($ 3.50)");
                Console.WriteLine("6: Insalata di riso ($ 8.00)");
                Console.WriteLine("7: Frutta di stagione ($ 5.00)");
                Console.WriteLine("8: Pizza fritta ($ 5.00)");
                Console.WriteLine("9: Piadina vegetariana ($ 6.00)");
                Console.WriteLine("10: Panino Hamburger ($ 7.90)");
                Console.WriteLine("11: Stampa conto finale e conferma");
                Console.WriteLine("==============MENU==============");
                string selezione = Console.ReadLine();
                int ordine = 11;
                try
                {
                    ordine = int.Parse(selezione);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
                try
                {
                    AddToCart(ordine, ordersList);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }

        static void AddToCart(int order, List<Product> ordersList)
        {
            Product[] menu = { new Product { productName = "Coca Cola 150 ml", productPrice = 2.50f }, new Product { productName = "Insalata di pollo", productPrice = 5.20f }, new Product { productName = "Pizza Margherita", productPrice = 10.00f }, new Product { productName = "Pizza 4 Formaggi", productPrice = 12.50f }, new Product { productName = "Pz patatine fritte", productPrice = 3.50f }, new Product { productName = "Insalata di riso", productPrice = 8.00f }, new Product { productName = "Frutta di stagione", productPrice = 5.00f }, new Product { productName = "Pizza fritta", productPrice = 5.00f }, new Product { productName = "Piadina vegetariana", productPrice = 6.00f }, new Product { productName = "Panino Hamburger", productPrice = 7.90f } };

            switch (order)
            {
                case 1:
                    ordersList.Add(menu[0]);
                    break;
                case 2:
                    ordersList.Add(menu[1]);
                    break;
                case 3:
                    ordersList.Add(menu[2]);
                    break;
                case 4:
                    ordersList.Add(menu[3]);
                    break;
                case 5:
                    ordersList.Add(menu[4]);
                    break;
                case 6:
                    ordersList.Add(menu[5]);
                    break;
                case 7:
                    ordersList.Add(menu[6]);
                    break;
                case 8:
                    ordersList.Add(menu[7]);
                    break;
                case 9:
                    ordersList.Add(menu[8]);
                    break;
                case 10:
                    ordersList.Add(menu[9]);
                    break;
                case 11:
                    PayAndLeave(ordersList);
                    break;
                /*default:
                    Console.WriteLine("Scelta non valida. Premere un tasto per continuare...");
                    Console.ReadKey();
                    break;*/
            }
        }

        static void PayAndLeave(List<Product> ordersList)
        {
            Console.WriteLine("Recap ordine");
            float totale = 3.00f;
            foreach (Product order in ordersList)
            {
                Console.WriteLine($"{order.productName}, {order.productPrice}$");
                totale += order.productPrice;
            }
            Console.WriteLine("Coperto , 3,00$");
            Console.WriteLine("Totale :");
            Console.WriteLine("{0}", totale);
            ordersList.Clear();
            Console.ReadLine();
        }
    }
}
