let ing1 = document.getElementById("Ingrediente 1");
let ing2 = document.getElementById("Ingrediente 2");
let ing3 = document.getElementById("Ingrediente 3");
let ing4 = document.getElementById("Ingrediente 4");
let ing5 = document.getElementById("Ingrediente 5");
let ing6 = document.getElementById("Ingrediente 6");
let responsiveNome = document.getElementById("responsiveDiv");
let checkout = document.getElementById("out");
let codice = document.getElementById("CS");
let nomeContainer= document.getElementById("nome");
let prezzoTotale=document.getElementById("tot");
let sconto = document.getElementById("sc");
let Final = document.getElementById("final");
let reset = document.getElementById("reset");
let piu = document.getElementById("incrementBtn");
let meno = document.getElementById("decrementBtn");

let countPrezzo=4.50;
let codiceSconto="qwerty";
alert("Codice sconto: "+ codiceSconto)

let nome = prompt("Inserisci il tuo nome");
nomeContainer.textContent=nome;


ing1.addEventListener("click", function () {
    if (ing1.checked){
        console.log("Hai selezionato Insalata");
        countPrezzo+=parseFloat(ing1.value);
        console.log(countPrezzo)
    }
});
ing2.addEventListener("click", function () {
    if (ing2.checked){
        console.log("Hai selezionato Pomodori");
        countPrezzo+=parseFloat(ing2.value);
        console.log(countPrezzo)
    }
});
ing3.addEventListener("click", function () {
    if (ing3.checked){
        console.log("Hai selezionato Bacon");
        countPrezzo+=parseFloat(ing3.value);
        console.log(countPrezzo)
    }
});
ing4.addEventListener("click", function () {
    if (ing4.checked){
        console.log("Hai selezionato Cetriolini");
        countPrezzo+=parseFloat(ing4.value);
        console.log(countPrezzo)
    }
});
ing5.addEventListener("click", function () {
    if (ing5.checked){
        console.log("Hai selezionato Cheddar");
        countPrezzo+=parseFloat(ing5.value);
        console.log(countPrezzo)
    }
});
ing6.addEventListener("click", function () {
    if (ing6.checked){
        console.log("Hai selezionato Maionese");
        countPrezzo+=parseFloat(ing6.value);
        console.log(countPrezzo)
    }
});

checkout.addEventListener("click", function(){
    if(count>0){
        console.log("ciao")
        ing3.checked=true;
        countPrezzo+=(2.50*count);
    }else{
        ing3.checked=false;
    }
    prezzoTotale.textContent=countPrezzo;
    if (CS.value==codiceSconto){
        sconto.textContent='10%';
        Final.textContent=countPrezzo-(countPrezzo*0.1);
    }else{
        sconto.textContent="Codice sconto errato o non inserito";
        Final.textContent=countPrezzo;
    }
    
});

reset.addEventListener("click", function(){
    prezzoTotale.textContent="";
    sconto.textContent="";
    Final.textContent="";
    ing1.checked=false;
    ing2.checked=false;
    ing3.checked=false;
    ing4.checked=false;
    ing5.checked=false;
    ing6.checked=false;
    CS.value="";
    countPrezzo=4.50;
});

let count=0

  piu.addEventListener("click", function(){
         count+=1;
         console.log("ciao");
         console.log(count);
     });

  meno.addEventListener("click", function(){
         count-=1;
         console.log("ciao");
         console.log(count);
     });










