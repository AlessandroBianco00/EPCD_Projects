const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

let charactersNames = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name); 
}
console.log(charactersNames);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

let femaleCharacters =[];
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'female') {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

let eyeColor = {
  "blue" : [],
  "yellow" : [],
  "brown" : [],
  "red" : [],
  "blue-gray" : [],
}

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch(starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;
  }
   
}
console.log(eyeColor.blue);
/* CONTROLLO SOLO IL PRIMO, DI SEGUITO GLI ALTRI
console.log(eyeColor.yellow);
console.log(eyeColor.brown);
console.log(eyeColor.red);
console.log(eyeColor["blue-gray"]);
*/

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0;
let j = 0;
while (j < starWarsCharacters.length) {
  crewMass += starWarsCharacters[j].mass;
  j++;
}
console.log(crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

let shipMessage;
switch(true) {
  case crewMass <= 500:
    shipMessage = "Ship is under loaded";
    break;
  case crewMass > 500 && crewMass <= 700:
    shipMessage = "Ship is half loaded";
    break;
  case crewMass > 700 && crewMass <= 900:
    shipMessage = "Warning: Load is over 700";
    break;
  case crewMass > 900 && crewMass <= 1000:
    shipMessage = "Critical Load: Over 900";
    break;
  case crewMass > 1000:
    shipMessage = "DANGER! OVERLOAD ALERT: escape from ship now!";
    break;
}
console.log(shipMessage);

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'n/a') {
    starWarsCharacters[i].gender = 'robot';
    console.log(starWarsCharacters[i].gender, 'posizione numero ' + i);
  }
}


/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

/* POP ELIMINA DAL FONDO NON RIESCO A ELIMINARE I NOMI FEMMINILE SENZA RIORDINARE I NOMI
console.log(charactersNames.length);
for (let f = 0; f < femaleCharacters.length; f++) {
  for (let i = charactersNames.length - 1; i >= 0; i--) {
    if (femaleCharacters[f].name === charactersNames[i]) {
      charactersNames.pop()
    }
  }
}
console.log(charactersNames.length);
*/

/* SOLUZIONE CON SPLICE*/
console.log(charactersNames.length);
for (let f = 0; f < femaleCharacters.length; f++){
  for (let i = charactersNames.length -1; i>=0; i--) { // ANDANDO A RITROSO ANALIZZO TUTTI I charactersNames, SE USASSI I CRESCENTE SPLICE SPOSTA IL SUCCESSIVO ALL'ELEMENTO ELIMNATO NELLA POSIZIONE PRECEDENTE SENZA ANALIZZARLO. L'ERRORE NON SAREBBE COMUNQUE VISUALIZZABILE POICHE' NON CI SONO ELEMENTI DOPPI, NEANCHE NEL CASO AGGIUNGESSI UNA SECONDA VOLTA LEIA (es) AVVEREBBE UN ERRORE POICHE' COMUNQUE AVENDO I NOMI SEGNATI IN femaleCharacters CI SAREBBE UN CONTROLLO ULTERIORE (f = 3).
    if (femaleCharacters[f].name === charactersNames[i]) {
      charactersNames.splice(i, 1)
    }
  }
}
console.log(charactersNames.length);
console.log(charactersNames);

/* PRIMA SOLUZIONE TROVATA (NON OTTIMALE) ############## nuovaLunghezza === charactersNames.length NON PERMETTE DI PROCEDERE AL FOR, ELIMINANDO UN NOME PER VOLTA
console.log(charactersNames.length);
nuovaLunghezza = charactersNames.length;
for (let f = 0; f < femaleCharacters.length; f++){
  for (let i = 0; nuovaLunghezza === charactersNames.length; i++) {
    if (femaleCharacters[f].name = charactersNames[i]) {
      charactersNames.pop(i)
    }
  }
}
nuovaLunghezza = charactersNames.length;
for (let f = 0; f < femaleCharacters.length; f++){
  for (let i = 0; nuovaLunghezza === charactersNames.length; i++) {
    if (femaleCharacters[f].name = charactersNames[i]) {
      charactersNames.pop(i)
    }
  }
}
console.log(charactersNames.length);
*/
/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

let lunghezza = starWarsCharacters.length;
let posizione1 = Math.floor(Math.random() * lunghezza);
console.log(posizione1);
console.log('Il personaggio ' + starWarsCharacters[posizione1].name + ' è alto ' + starWarsCharacters[posizione1].height + ' e pesa ' + starWarsCharacters[posizione1].mass + '. Ha capelli color ' + starWarsCharacters[posizione1].hair_color + ' e occhi color ' + starWarsCharacters[posizione1].eye_color + '. La sua data di nascita è ' + starWarsCharacters[posizione1].birth_year + ' ed è di genere ' + starWarsCharacters[posizione1].gender);
