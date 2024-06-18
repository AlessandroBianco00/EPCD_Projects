namespace PersonaEsercizio
{
    internal class Persona
    {
        private string nome;
        private string cognonome;
        private int eta;

        public Persona()
        {
            nome = "Anonimo";
            cognonome = "Anonimo";
            eta = 0;
        }
        public Persona(string nome, string cognonome, int eta)
        {
            this.nome = nome;
            this.cognonome = cognonome;
            this.eta = eta;
        }

        public string Nome 
        { 
            get { return nome; }
            set { nome = value; }
        }
        
        public string Cognonome
        {
            get { return cognonome; }
            set { cognonome = value; }
        }

        public int Eta 
        { 
            get { return eta; } 
            set { eta = value; } 
        }

        public string GetNome() 
        { 
            return nome; 
        }

        public string GetCognonome()
        {
            return cognonome;
        }

        public int GetEta()
        {
            return eta;
        }
        public string GetDettaglio()
        {
            string dettaglio = "Mi chiamo " + nome + " " + cognonome + " e ho " + eta.ToString() + "anni";
            return dettaglio;
        }
    }
}
