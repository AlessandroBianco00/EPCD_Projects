using ImpiegatiWebApp.Models;

namespace ImpiegatiWebApp.Services
{
    public interface IImpiegatoService
    {
        void AddEmployee(Impiegato impiegato);
        IEnumerable<Impiegato> GetEmployees();
        Impiegato GetEmployee(int id);
        void UpdateEmployee(int id, Impiegato impiegato);
        void DeleteEmployee(int id);
    }
}
