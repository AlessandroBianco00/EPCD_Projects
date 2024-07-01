CREATE TABLE [dbo].Customers
(
	[CustomerId] INT NOT NULL PRIMARY KEY identity, 
    [FirstName] NCHAR(50) NOT NULL, 
    [LastName] NCHAR(50) NOT NULL, 
    [BirthDate] DATETIME2 NOT NULL, 
    [Gender] CHAR(1) NOT NULL, 
    [CodiceFiscale] NCHAR(16) NOT NULL, 
    [PartitaIVA] NCHAR(11) NOT NULL, 
    [Attivo] MONEY NOT NULL, 
    [Saldo] MONEY NOT NULL
)
