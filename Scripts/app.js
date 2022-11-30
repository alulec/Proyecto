let nombre = "Alexis";
console.log(`Saludo: ${nombre}`);
console.log(`Saludo: ${nombre.toUpperCase()}`);
console.log(`Saludo: ${nombre.toLowerCase()}`);

let estado = true;

if(estado){
 let estado = false;
 console.log(estado);
}


var estado1 = true;

if(estado1){
 var estado1 = false;
 console.log(estado);
}


const lista = ["Pera", "Toronja", "Sandia","Uva"]

lista.push("Jicama");
console.log(lista[4]);  

lista.unshift("Manzana");
console.log(lista[0]);

const listaEliminada = ["Pera", "Toronja", "Sandia","Uva"]

listaEliminada.push("Jicama");
console.log(listaEliminada);  

listaEliminada.pop();

console.log(listaEliminada);




let frutas = [];
let indice = 0;
while (confirm("¿Agregar nueva fruta?")){
    let fruta = prompt("Dame una fruta: ");
    frutas[indice] = fruta;
    indice ++;
}

console.log(frutas);