namespace ImpiegatiWebApp.Models
{
    public class Impiegato
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CF { get; set; }
        public int Age { get; set; }
        public decimal MonthlySalary { get; set; }
        public bool FiscalDeduction { get; set; }
        public int JobId { get; set; }
    }
}
