using ImpiegatiWebApp.Models;
using ImpiegatiWebApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ImpiegatiWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IImpiegatoService _impiegatoService;

        public HomeController(ILogger<HomeController> logger, IImpiegatoService impiegatoService)
        {
            _logger = logger;
            _impiegatoService = impiegatoService;
        }

        public IActionResult Index()
        {
            return View(_impiegatoService.GetEmployees().OrderByDescending(a => a.LastName));
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
