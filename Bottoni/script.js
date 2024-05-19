let pulsanteRosso = document.getElementById("element1");
let box=document.getElementById("element")

console.log(typeof box);

console.log(box);

pulsanteRosso.addEventListener("click", function () {
    console.log("Rosso");
    box.classList.remove("yellow", "green");
    box.classList.toggle("red")});

let pulsanteGiallo = document.getElementById("element2");
pulsanteGiallo.addEventListener("click", function () {
    console.log("Giallo");
    box.classList.remove("red", "green");
    box.classList.toggle("yellow")});

let pulsanteVerde = document.getElementById("element3");   
pulsanteVerde.addEventListener("click", function () {
    console.log("Verde");
    box.classList.remove("yellow", "red");
    box.classList.toggle("green")});        
    

    