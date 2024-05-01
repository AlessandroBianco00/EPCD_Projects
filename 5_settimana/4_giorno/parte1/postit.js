window.onload = () => {
  scopri();
};

// SHUFFLE FISHER-YATES FUNZIONA CORRETTAMENTE
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const arrayIndici = (arr) => {
  const variabileArray = [];
  for (let j = 0; j < arr.length; j++) {
    variabileArray.push(j);
  }
  return variabileArray;
};

function scopri() {
  const everyPostit = document.getElementsByClassName("post-it");
  const arrayPosizioni = arrayIndici(everyPostit);
  let i;
  shuffleArray(arrayPosizioni);
  const myInterval = setInterval(() => {
    if (arrayPosizioni.length > 0) {
      i = arrayPosizioni.pop();
      everyPostit[i].classList.add("animated");
    } else {
      console.log("fine");
      clearInterval(myInterval);
      for (let j = 0; j < everyPostit.length; j++) {
        everyPostit[j].classList.remove("hidden");
        everyPostit[j].classList.remove("animated");
      }
    }
  }, 500);
}
