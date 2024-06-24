using MenuWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MenuWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var menuList = new List<MenuItemModel>() { 
                new MenuItemModel { productName = "Coca Cola 150 ml", productPrice = 2.50f },
                new MenuItemModel { productName = "Insalata di pollo", productPrice = 5.20f },
                new MenuItemModel { productName = "Pizza Margherita", productPrice = 10.00f },
                new MenuItemModel { productName = "Pizza 4 Formaggi", productPrice = 12.50f },
                new MenuItemModel { productName = "Pz patatine fritte", productPrice = 3.50f },
                new MenuItemModel { productName = "Insalata di riso", productPrice = 8.00f },
                new MenuItemModel { productName = "Frutta di stagione", productPrice = 5.00f },
                new MenuItemModel { productName = "Pizza fritta", productPrice = 5.00f },
                new MenuItemModel { productName = "Piadina vegetariana", productPrice = 6.00f },
                new MenuItemModel { productName = "Panino Hamburger", productPrice = 7.90f } };
            return View(menuList);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
