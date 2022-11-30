var nombre = prompt("Dame tu nombre: ");
console.log("Hola " + nombre);

var num1 = prompt("Dame tu un numero: ");
var num2 = prompt("Dame tu un numero: ");
var suma = num1 +  num2;
console.log("El resultado de la suma es: "+ suma);

var cantidadDeberes = Number(prompt("Cuantos pendientes tienes? "));
var cuartoLimpio = Boolean(prompt("Tu cuarto esta limpio (1 -> si 0 -> no)? "));
if(cantidadDeberes == 0 && cuartoLimpio == true){
    console.log("Puedes salir a jugar");
}else{
    console.log("Aun tienes cosas por hacer");
}

var ine = Boolean(prompt("Tienes ine (1 -> si 0 -> no)? "));
var permisoConducir = Boolean(prompt("Tienes permiso de conducir (1 -> si 0 -> no)?"));
if(ine == true && permisoConducir == true){
    console.log("Puedes entrar al bar");
}else{
    console.log("No te podemos dejar entrar");
}

var salonLimpio = true;
if(!salonLimpio == false){
    console.log("Hay que limpiar el salon");
}

var numeroAleatorio = Math.floor((Math.random() * (10)) + 1);
var propuesta = 12;
var intento = 0;
while(propuesta != numeroAleatorio){
    propuesta = Number(prompt("Adivina el numero que cree para ti (esta en el rango 1-10): "));
    intento ++;
}
console.log("Tardaste: "+ intento + "intentos");

var numeroRango = Number(prompt("Dame un numero entre el 1 y 10: "));
if(numeroRango < 1 || numeroRango > 10){
    console.log("El numero no es valido");
}