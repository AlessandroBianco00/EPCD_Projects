using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVConsoleApp
{
    internal class CurriculumVitae
    {
        public PersonalInformations PersonalInformations { get; set; }
        public List<Studies> Studies { get; set; }
        public WorkExperience CurrentJob { get; set; }
        public List<WorkExperience> WorkExperience { get; set; }

        public CurriculumVitae(PersonalInformations personalInformations, List<Studies> studies, WorkExperience currentJob, List<WorkExperience> workExperience)
        {
            PersonalInformations = personalInformations;
            Studies = studies;
            CurrentJob = currentJob;
            WorkExperience = workExperience;
        }
    }

    class PersonalInformations
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }

        public PersonalInformations(string firstName, string lastName, int phoneNumber, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            Email = email;
        }
    }

    class Studies
    {
        public string Title { get; set; }
        public string Institute { get; set; }
        public DateOnly StartingDate { get; set; }
        public DateOnly EndingDate { get;set; }

        public Studies (string title, string institute, DateOnly startingDate, DateOnly endingDate)
        {
            Title = title;
            Institute = institute;
            StartingDate = startingDate;
            EndingDate = endingDate;
        }
    }

    class WorkExperience
    {
        public string Company { get; set; }
        public string JobTitle { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public string Duties { get; set; }

        public WorkExperience (string company, string jobTitle, DateTime startDate, DateTime endDate, string description, string duties)
        {
            Company = company;
            JobTitle = jobTitle;
            StartDate = startDate;
            EndDate = endDate;
            Description = description;
            Duties = duties;
        }
    }
}
