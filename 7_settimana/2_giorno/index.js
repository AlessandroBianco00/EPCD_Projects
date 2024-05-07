// FORM CON SALVATAGGIO UTENTE PRECEDENTE

const formNome = document.querySelector("form");

formNome.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputNome = document.querySelector("input");
  localStorage.setItem("nomeUtente", inputNome.value);
  inputNome.value = "";
  checkParagraph();
});

const clearButton = document.querySelector(".btn-danger");
clearButton.addEventListener("click", function () {
  if (!localStorage.getItem("nomeUtente")) {
    alert("Non c'è nessun nome utente salvato");
  } else {
    localStorage.removeItem("nomeUtente");
    checkParagraph();
  }
});

const checkParagraph = function () {
  const previousUser = document.getElementById("previousUser");
  previousUser.innerHTML = localStorage.getItem("nomeUtente");
};

// TIMER CON SESSION STORAGE

const sessionTimer = document.getElementById("timer");
const printTimer = function () {
  let secondsPassed;
  if (sessionStorage.getItem("sessionSeconds")) {
    secondsPassed = JSON.parse(sessionStorage.getItem("sessionSeconds"));
  } else {
    secondsPassed = 0;
  }
  setInterval(() => {
    secondsPassed++;
    sessionStorage.setItem("sessionSeconds", secondsPassed);
    sessionTimer.innerHTML = "Timer Session : " + secondsPassed + " s";
  }, 1000);
};

window.onload = function () {
  checkParagraph();
  printTimer();
};
