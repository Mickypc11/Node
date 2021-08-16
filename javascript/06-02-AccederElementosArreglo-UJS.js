//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}
//Push agragr y length contaa
autos.push('Audi');
console.log(autos);

autos[autos.length]='cadilac';
console.log(autos);
autos[6]='cadilac';

 console.log(autos);
 console.log(typeof autos);

 ///arreglos??
 console.log(Array.isArray(autos));
 console.log(autos instanceof Array);

 /////////////////////////
function holaMiguel(a,b){
    return a+b;
}
let resultado = holaMiguel(2,2);
console.log(resultado);


//declaracion funvion tipo expresion
let sumar= function (a1,b1){return a1+b1}; 
 
resultado=sumar(1,5);
console.log(resultado);
 


 
 