window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = function (e) {
    e.preventDefault()
    stampaTask();
}

function stampaTask() {
    let listaTask = document.querySelector("ul");
    let nuovaTask = document.createElement("li");
    let inputValue = document.getElementById("campoTask").value;
    nuovaTask.className = "classeTask";
    nuovaTask.textContent = inputValue;
    let bin = document.createElement("button");
    bin.className = 'cestino';
    bin.textContent = 'Cancella';
    nuovaTask.appendChild(bin);
    listaTask.appendChild(nuovaTask);
    bin.addEventListener("click", remove);
}

const sbarrami = function () {
    let nuovaTask = document.getElementsByClassName("classTask");
    nuovaTask.onclick = function () {
        nuovaTask.style.color = 'red'
        /*nuovaTask.toggle('sbarrato');*/
    }
}
/*bin.setAttribute("onclick", "cancellami(")
function cancellami() {

}*/