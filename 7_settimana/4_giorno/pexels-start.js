const primoBottone = document.getElementById("btn-primary");
const secondoBottone = document.getElementById("btn-secondary");
const searchBottone = document.getElementById("btn-search");
const album = document.getElementById("album-photo");
const searchField = document.querySelector("form input");

const dettaglioFoto = function () {
  console.log(this);
  window.location.href = `dettaglio.html?eventId=${this.id}`;
};

const unpackObj = function (object) {
  object.photos.forEach((photo) => {
    const divColumn = document.createElement("div");
    divColumn.classList.add("col-md-4");
    divColumn.innerHTML = `<div class="card mb-4 shadow-sm h-100">
        <img
          src="${photo.src.original}"
          class="bd-placeholder-img card-img-top"
          id="${photo.id}"
        />
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                onclick = "modalImg(event)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                onclick = "hideFunction(event)"
              >
                Hide
              </button>
            </div>
            <small class="text-muted">${photo.id}</small>
          </div>
        </div>
      </div>`;
    album.appendChild(divColumn);
    const singolaImg = document.getElementById(photo.id);
    singolaImg.addEventListener("click", dettaglioFoto);
  });
};

const getDataset = function (nomePhoto) {
  fetch(`https://api.pexels.com/v1/search?query=${nomePhoto}`, {
    headers: {
      Authorization: "GeYc5urMY5Yzy0hzxWWXd6Wfkle66uH2kLelTIFwiJNjVefT9n1jSw6M",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta, status " + response.status);
      }
    })
    .then((obj) => {
      console.log(obj);
      unpackObj(obj);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

primoBottone.addEventListener("click", () => {
  album.innerHTML = "";
  getDataset("mountain");
});

secondoBottone.addEventListener("click", () => {
  album.innerHTML = "";
  getDataset("planet");
});

searchBottone.addEventListener("click", (e) => {
  e.preventDefault();
  album.innerHTML = "";
  getDataset(searchField.value);
  searchField.value = "";
});

const hideFunction = function (e) {
  e.target.closest(".col-md-4").classList.add("d-none");
};

const modalImg = function (e) {
  const srcImmagine = e.target.closest(".card").children[0].getAttribute("src");
  const immagineModale = document.getElementById("immagineModale");
  immagineModale.setAttribute("src", srcImmagine);
};

window.onload = function () {
  album.innerHTML = "";
  getDataset("random");
};
