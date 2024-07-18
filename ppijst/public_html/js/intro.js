function emEspanhol(){
	alert('¡Hola Mundo!');
}
function cancelar(){
	alert('Fernanda foi cancelada');
}
function ppi(){
	alert('JOTA ÉSSI');
}
console.log(document);
console.log(document.querySelector("button"));
console.log(document.querySelector("button").textContent);

var btn = document.querySelector("button:nth-child(2)");
console.log(btn);
console.log(btn.textContent);

btn.textContent = "Spanish";