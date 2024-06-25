namespace CVConsoleApp;

class Program
{
    static void Main(string[] args)
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
        PrintCVDetailsOnConsole(marioRossiCV);
    }

    static void PrintCVDetailsOnConsole(CurriculumVitae cv)
    {
        Console.WriteLine($"CV di {cv.PersonalInformations.FirstName} {cv.PersonalInformations.LastName}");
        Console.WriteLine();
        Console.WriteLine("++++ INIZIO INFORMAZIONI PERSONALI ++++");
        Console.WriteLine($"Nome : {cv.PersonalInformations.FirstName}");
        Console.WriteLine($"Cognome : {cv.PersonalInformations.LastName}");
        Console.WriteLine($"Numero telfeonico : {cv.PersonalInformations.PhoneNumber}");
        Console.WriteLine($"Email : {cv.PersonalInformations.Email}");
        Console.WriteLine("++++ FINE INFORMAZIONI PERSONALI ++++");
        Console.WriteLine();
        Console.WriteLine("++++ INIZIO Studi ++++");
        foreach (Studies study in cv.Studies) 
        {
            Console.WriteLine($"Istituto: {study.Institute}");
            Console.WriteLine($"Qualifica: {study.Title}");
            Console.WriteLine($"Dal {study.StartingDate} al {study.EndingDate}");
        }
        Console.WriteLine("++++ FINE Studi ++++");
        Console.WriteLine();
        Console.WriteLine("++++ INIZIO Impiego ++++");
        PrintWorkExp(cv.CurrentJob);
        Console.WriteLine("++++ FINE Impiego ++++");
        Console.WriteLine();
        Console.WriteLine("++++ INIZIO Esperienze Lavorative ++++");
        foreach (WorkExperience wE in cv.WorkExperience) { PrintWorkExp(wE); }
        Console.WriteLine("++++ FINE Esperienze Lavorative ++++");
    }

    static void PrintWorkExp(WorkExperience wExp)
    {
        Console.WriteLine($"Presso: {wExp.Company}");
        Console.WriteLine($"Tipo di lavoro: {wExp.JobTitle}");
        Console.WriteLine($"Compito: {wExp.Duties}");
        Console.WriteLine($"Dal {wExp.StartDate} al {wExp.EndDate}");
    }
}
