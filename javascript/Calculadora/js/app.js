console.log("Hola");

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt( operandoB.value);
    if(isNaN(resultado))
        resultado = 'La opéracion no es numero'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}