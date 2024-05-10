const showSinglePhoto = function (photo) {
  const mainDettaglio = document.querySelector("main");
  mainDettaglio.setAttribute("style", `background-color:${photo.avg_color};`);
  const rowDiv = document.querySelector(".row");
  const divColumn = document.createElement("div");
  divColumn.classList.add("col-md-6");
  divColumn.innerHTML = `<div class="card">
    <img src="${photo.src.original}" class="card-img-top" alt="dettaglio foto">
    <div class="card-body">
      <h5 class="card-title">Photographer: ${photo.photographer} </h5>
      <a href="${photo.photographer_url}">Photographer page</a>
      <a href="pexels-start.html" class="btn btn-primary">Go back</a>
    </div>
  </div>`;
  rowDiv.appendChild(divColumn);
};

const getSinglePhoto = function (idFoto) {
  fetch(`https://api.pexels.com/v1/photos/${idFoto}`, {
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
      showSinglePhoto(obj);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

window.onload = function () {
  const addressBarContent = new URLSearchParams(location.search);
  const idFoto = addressBarContent.get("eventId");
  console.log(idFoto);
  getSinglePhoto(idFoto);
};
