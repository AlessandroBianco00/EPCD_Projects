window.onload = () => {
  contaDestinazioni();
  funzionePillole();
  //  rimuoviCard(); momentaneamente disattivata per mostrare la pagina
};

const contaDestinazioni = () => {
  const bottoneConteggio = document.getElementById("conteggio");
  bottoneConteggio.addEventListener("click", () => {
    const numeroDestinazioni = document.querySelectorAll(
      ".destinazioneVacanza"
    );
    const arrayDestinazioni = Array.from(numeroDestinazioni);
    alert("Ci sono " + arrayDestinazioni.length + " destinazioni disponibili");
  });
};

const funzionePillole = () => {
  const contenitorePill = document.querySelectorAll(
    ".destinazioneVacanza span"
  );
  for (let i = 0; i < contenitorePill.length; i++) {
    contenitorePill[
      i
    ].innerHTML = `<img src="./assets/isola.png" class="card-img-top" alt="foto destinazione"/><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">HOT</span></span>`;
  }
};

const rimuoviCard = () => {
  const tutteLeCard = document.querySelectorAll(".destinazioneVacanza");
  for (let i = 0; i < tutteLeCard.length; i++) {
    tutteLeCard[i].classList.add("d-none");
  }
};
