CREATE TABLE [dbo].Cantieri
(
	[IdCantiere] INT NOT NULL PRIMARY KEY identity, 
    [DenominazioneCantiere] NCHAR(10) NOT NULL, 
    [Indirizzo] NCHAR(50) NOT NULL, 
    [Città] NCHAR(50) NOT NULL, 
    [CAP] NCHAR(5) NOT NULL, 
    [PersonaRiferimento] NCHAR(50) NOT NULL, 
    [DataInizioLavori] DATETIME2 NOT NULL, 
    [DataFineLavori] DATETIME2 NULL, 
    [LavoriTerminati] BIT NOT NULL
)
