-- a. Visualizzare tutti gli impiegati oltre i 29 anni;  

SELECT * FROM Impiegati WHERE Eta > 29

-- b. Visualizzare tutti gli impiegati con un reddito di almeno 800 euro mensili;  

SELECT * FROM Impiegati WHERE [Reditto Mensile] >= 800

-- c. Visualizzare tutti gli impiegati che posseggono la detrazione fiscale;  

SELECT * FROM Impiegati WHERE [Detrazione Fiscale] = 1

-- d. Visualizzare tutti gli impiegati che non posseggono la detrazione fiscale;  

SELECT * FROM Impiegati WHERE [Detrazione Fiscale] = 0

-- e. Visualizzare tutti gli impiegati cui il cognome cominci con una lettera G e li visualizzi in ordine alfabetico; 

SELECT * FROM Impiegati WHERE Cognome LIKE 'G%' ORDER BY Cognome

-- f. Visualizzare il numero totale degli impiegati registrati nella base dati;  

SELECT COUNT(*) AS TotaleImpiegati FROM Impiegati

-- g. Visualizzare il totale dei redditi mensili di tutti gli impiegati;  

SELECT SUM([Reditto Mensile]) AS ReddittoTotaleMensileImpiegati FROM Impiegati 

-- h. Visualizzare la media dei redditi mensili di tutti gli impiegati; 

SELECT AVG([Reditto Mensile]) AS ReddittoMensileMedio FROM Impiegati 

-- i. Visualizzare l’importo del reddito mensile maggiore;  

SELECT MAX([Reditto Mensile]) AS ReddittoMensileMassimo FROM Impiegati 

-- j. Visualizzare l’importo del reddito mensile minore; 

SELECT MIN([Reditto Mensile]) AS ReddittoMensileMinimo FROM Impiegati 

-- k. Visualizzare gli impiegati assunti dall’ 01/01/2001 all’ 01/01/2009;  

SELECT IDImpiegato, Cognome, Nome, IDImpieghi, Assunzione FROM Impiegati AS impiegati INNER JOIN Impieghi AS i ON impiegati.Impiego_FK = i.IDImpieghi WHERE Assunzione BETWEEN '20010101' AND '20090101' ORDER BY Assunzione

-- l. Tramite una query parametrica che identifichi il tipo di impiego, visualizzare tutti gli impiegati che corrispondono a quel tipo di impiego;  

SELECT IDImpiegato, Cognome, Nome, [Tipo Impiego] FROM Impiegati AS impiegati INNER JOIN Impieghi AS i ON impiegati.Impiego_FK = i.IDImpieghi WHERE [Tipo Impiego] = 'Muratore'

-- m. Visualizzare l’età media dei lavoratori all’interno dell’azienda.  

SELECT AVG(Eta) AS EtaMediaImpiegati FROM Impiegati 