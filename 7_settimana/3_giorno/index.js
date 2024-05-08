const scartaLibro = function (e) {
  e.target.closest(".card").classList.add("d-none");
};

const carrello = document.getElementById("carrello");
const arrayCarello = [];

const addToCart = function (e) {
  const liArticolo = document.createElement("li");
  liArticolo.innerText = e.target
    .closest(".card-body")
    .querySelector(".card-title").innerText;
  arrayCarello.push(liArticolo.innerText);
  carrello.appendChild(liArticolo);
  localStorage.setItem("carrello", JSON.stringify(arrayCarello));
};

const recuperaCarello = function () {
  /*let a = JSON.parse(localStorage.getItem("carrello"));*/
};

const stampaCatalogo = function (arrayLibri) {
  const divCatalogo = document.querySelector("article .row");
  arrayLibri.forEach((book) => {
    const divCarta = document.createElement("div");
    divCarta.classList.add("col-3");
    divCarta.innerHTML = `<div class="card">
        <img src="${book.img}" class="card-img-top" alt="book cover">
        <div class="card-body">
          <h5 class="card-title"> ${book.title} </h5>
          <p class="card-text">$ ${book.price}</p>
          <button type="button" class="btn btn-danger discard-btn" >Scarta</button>
          <button type="button" class="btn btn-success add-btn" >Compra Ora</button>
      </div>`;
    divCatalogo.appendChild(divCarta);
  });
  const discardButton = document.querySelectorAll(".discard-btn");
  discardButton.forEach((btn) => {
    btn.addEventListener("click", scartaLibro);
  });
  const addButton = document.querySelectorAll(".add-btn");
  addButton.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
};

const getCatalogue = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Server status: " + response.status);
      }
    })
    .then((array) => {
      stampaCatalogo(array);
    })
    .catch((err) => {
      console.log("ERRORE CATCH", err);
    });
};

window.onload = function () {
  getCatalogue();
  console.log(localStorage.getItem("carrello"));
  recuperaCarello();
};
