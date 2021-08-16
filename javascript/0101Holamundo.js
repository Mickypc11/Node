var nombre = "Miguel";

console.log(nombre);

var objeto = {
  nombre: "Miguel",
  Apellido: "Perez",
  telkefono: "566",
};
console.log(objeto);

//tipos de funcion

function mifunvion() {}

console.log(typeof mifunvion);

var x;
console.log(x);

const apellido = "Perez";
let nombre1;
nombre1 = "ale";

console.log(nombre1);

let numero1 = 20;
let numero2;

numero2 = 9;

if (numero2 % 2 == 0) {
  console.log("es par");
} else {
  console.log(" NO es par");
}

if (numero1 >= 18) {
  console.log("es mayor");
} else {
  console.log(" NO es par");
}
//---------------------------------------------------
let hora = 19;

if (hora >= 0 && hora < 6) {
  console.log("Durmiendo");
} else if (hora >= 6 && hora < 11) {
  console.log("Durmiendo");
} else if (hora >= 11 && hora <= 19) {
  console.log("Durmiendo");
} else if (hora >= 19 && hora <= 24) {
  console.log("Durmiendo");
}

/////////////////////

let numero = 1;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: case 5: case 6:
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case true:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);

////////////////////////////////////