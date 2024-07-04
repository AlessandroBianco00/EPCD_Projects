using ImpiegatiWebApp.Models;
using System.Data.Common;
using System.Data.SqlClient;

namespace ImpiegatiWebApp.Services
{
    public class ImpiegatoService : SqlServerServiceBase, IImpiegatoService
    {
        public ImpiegatoService(IConfiguration config) : base(config)
        {
        }

        public void AddEmployee(Impiegato impiegato)
        {
            throw new NotImplementedException();
        }

        private Impiegato Create(DbDataReader reader)
        {
            return new Impiegato
            {
                FirstName = reader.GetString(1),
                LastName = reader.GetString(2),
                Id = reader.GetInt32(0),
                CF = reader.GetString(3),
                Age = reader.GetInt32(4),
                MonthlySalary = reader.GetDecimal(5),
                FiscalDeduction = reader.GetBoolean(6),
                JobId = reader.GetInt32(7),
            };
        }

        public void DeleteEmployee(int id)
        {
            throw new NotImplementedException();
        }

        public Impiegato GetEmployee(int id)
        {
            var cmd = GetCommand("SELECT [IDImpiegato], [Cognome], [Nome], [Codice Fiscale], [Eta], [Reditto Mensile], [Detrazione Fiscale], [Impiego_FK] FROM Impiegati");
            cmd.Parameters.Add(new SqlParameter("@id", id));
            using var conn = GetConnection();
            conn.Open();
            var reader = cmd.ExecuteReader();
            if (reader.Read())
                return Create(reader);
            throw new Exception("Non trovato");
        }

        public IEnumerable<Impiegato> GetEmployees()
        {
            using var conn = GetConnection();
            conn.Open();
            using var cmd = GetCommand("SELECT [IDImpiegato], [Cognome], [Nome], [Codice Fiscale], [Eta], [Reditto Mensile], [Detrazione Fiscale], [Impiego_FK] FROM Impiegati");
            using var reader = cmd.ExecuteReader();
            var list = new List<Impiegato>();
            while (reader.Read())
                list.Add(Create(reader));
            conn.Close();
            return list;
        }

        public void UpdateEmployee(int id, Impiegato impiegato)
        {
            throw new NotImplementedException();
        }
    }
}
