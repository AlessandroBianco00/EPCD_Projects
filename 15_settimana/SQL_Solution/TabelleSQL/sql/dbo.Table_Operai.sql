CREATE TABLE [dbo].Operai
(
	[IdDipendente] INT NOT NULL PRIMARY KEY identity, 
    [Nome] NCHAR(50) NOT NULL, 
    [Cognome] NCHAR(50) NOT NULL, 
    [CodiceFiscale] NCHAR(16) NOT NULL, 
    [FigliACarico] INT NOT NULL, 
    [Sposato] BIT NOT NULL, 
    [LivelloLavorativo] NCHAR(10) NOT NULL, 
    [DescrizioneMansione] NCHAR(100) NOT NULL, 
    [Salario] MONEY NOT NULL, 
    [Cantiere_FK] INT NULL
)
