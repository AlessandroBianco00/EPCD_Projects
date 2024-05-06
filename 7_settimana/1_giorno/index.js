/* ESERCIZO 1 - CLASSE USER*/

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confrontoEta = function (user) {
    if (this.age > user.age) {
      return this.firstName + " è più vecchio di " + user.firstName;
    } else {
      return user.firstName + " è più vecchio di " + this.firstName;
    }
  };
}

const mario = new User("Mario", "Rossi", 35, "Monza");

const luca = new User("Luca", "Barbieri", 27, "Parma");

const pietro = new User("Pietro", "Smusi", 41, "Arezzo");

console.log(luca.confrontoEta(mario));
console.log(pietro.confrontoEta(luca));

/* ESERCIZO 2 - CLASSE PET*/

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner = function (pet) {
    if (this.ownerName === pet.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const bianco = new Pet("Bianco", "Napoleone", "cavallo", "sauro");

const silvestro = new Pet("Silvestro", "Nonna", "gatto", "certosino");

const kurt = new Pet("Kurt", "Nonna", "cane", "pastore tedesco");

console.log(silvestro.sameOwner(bianco));
console.log(kurt.sameOwner(silvestro));

/* DOM MANIPULATION */
const nomePet = document.getElementById("petName");
const nomeOwner = document.getElementById("ownerName");
const speciePet = document.getElementById("specie");
const razzaPet = document.getElementById("breed");

const arrayAnimali = [];

const formPet = document.querySelector("form");

const aggiungiAnimali = function () {
  const containerLista = document.querySelector("section .row");
  containerLista.innerHTML = "";
  arrayAnimali.forEach((pet) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-6", "col-md-3", "border", "border-info", "p-2");
    newDiv.innerHTML = `<h6>${pet.petName}</h6>
    <h6>${pet.ownerName}</h6>
    <h6>${pet.species}</h6>
    <h6>${pet.breed}</h6>`;
    containerLista.appendChild(newDiv);
  });
};

formPet.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuovoAnimale = new Pet(
    nomePet.value,
    nomeOwner.value,
    speciePet.value,
    razzaPet.value
  );

  arrayAnimali.push(nuovoAnimale);

  nomePet.innerHTML = "";
  nomeOwner.innerHTML = "";
  speciePet.innerHTML = "";
  razzaPet.innerHTML = "";

  aggiungiAnimali();
});
