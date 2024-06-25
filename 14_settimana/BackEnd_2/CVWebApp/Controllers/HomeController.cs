using CVWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using CVConsoleApp;


namespace CVWebApp.Controllers
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
            var mrInfo = new PersonalInformations("Mario", "Rossi", 051757581, "mario@rossi.com");
            var mrStudies = new List<Studies>
        {
            new Studies("Bachelor of Science", "University of Example", new DateOnly(2015, 9, 1), new DateOnly(2019, 6, 30)),
            new Studies("Master of Science", "University of Example", new DateOnly(2019, 9, 1), new DateOnly(2021, 6, 30))
        };
            var mrJob = new WorkExperience("Tech Company", "Software Developer", new DateTime(2021, 7, 1), DateTime.Now, "Developing software applications", "Coding, testing, and debugging");
            var mrPastJobs = new List<WorkExperience>
        {
            new WorkExperience("Old Tech Company", "Junior Developer", new DateTime(2019, 7, 1), new DateTime(2021, 6, 30), "Assisting in software development", "Assisting senior developers, fixing bugs")
        };
            CurriculumVitae marioRossiCV = new CurriculumVitae(mrInfo, mrStudies, mrJob, mrPastJobs);
            return View(marioRossiCV);
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
