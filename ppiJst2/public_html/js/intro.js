
function emEspanhol() {
    alert('¡Hola Mundo!');
}

console.log(document);
console.log(document.querySelector("button"));
console.log(document.querySelector("button").textContent);

var btn = document.querySelector("button:nth-child(3)");
console.log(btn);
console.log(btn.textContent);

btn.textContent = "Spanish";

//outra aula
function cumprimentar() {
    var nome = document.querySelector("#nome");
    var p = document.querySelector("#cumprimento");
    p.textContent = "Bonjour, menino " + nome.value + "!!";
}

function changeColor(cor) {
    document.querySelector("#changeColor").style.backgroundColor = cor;
}
