CREATE TABLE [dbo].TabellaCantieriOperai
(
	[IdOperaio_FK] INT NOT NULL, 
    [IdCantiere_FK] INT NOT NULL,
	CONSTRAINT pk_IdOperaioCantiere PRIMARY KEY (IdOperaio_FK, IdCantiere_FK)
)
