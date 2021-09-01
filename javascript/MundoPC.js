class DispositivoEntrada{

    static contadorDispositivoEntradas = 0;//atributo de nuestra clase

    
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada; 
        this._marca = marca;
        
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    
    
        
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;
   
    
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);//llamar al constructor de la clase padre
        this.idRaton = ++Raton.contadorRatones;
    }
    
    //Sobreescritura
    toString(){
        return ',ID Raton: ' + this.idRaton + ',marca: ' + this._marca + ',Tipo Entrada: ' + this._tipoEntrada;
    }
}


class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;
   
    
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);//llamar al constructor de la clase padre
        this.idTeclado = ++Teclado.contadorTeclados;
    }
    
    //Sobreescritura
    toString(){
        return ',ID Teclado: ' + this.idTeclado + ',marca: ' + this._marca + ',Tipo Entrada: ' + this._tipoEntrada;
    }
}

class Monitor{

    static contadorMonitores = 0;
   
    
    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    //Sobreescritura
    toString(){
        return 'ID Monitor: ' + this.idMonitor + ', Marca: ' + this._marca + ', Tamaño: ' + this._tamaño;
    }
}


class Computadora{

    static contadorComputadora = 0;
   
    
    constructor(nombre,monitor,teclado,raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadora;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get monitor(){
        return this._monitor;
    }
    set raton(raton){
        this._raton = raton;
    }


    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get idComputadora(){
        return this._idComputadora;
    }
    agregarMonitor(monitor){
    
            this._monitor = monitor;
            //this._producos[this._contadorProductosAgregados++]= producto; agregar producto de forma de apuntador
    }
    agregarRaton(raton){
        
        this._raton = raton;
        //this._producos[this._contadorProductosAgregados++]= producto; agregar producto de forma de apuntador
    }
    agregarTeclado(teclado){
        
        this._teclado = teclado;
        //this._producos[this._contadorProductosAgregados++]= producto; agregar producto de forma de apuntador
    }


    //Sobreescritura
    toString(){
        return 'ID idComputadora: ' + this.idComputadora + ', Nombre: ' + this._nombre+ ', Monitor: ' + this._monitor +', Teclado: ' + this._teclado+ ', Raton: ' + this._raton ;
    }
}
class Orden{

    static contadorOrdenes = 0;
    
    constructor ( ){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
        this._contadorOrdenes = 0;

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        
            this._computadoras.push(computadora);
            
    }

    mostrarOrden(){

        
        let computadoraOrden ='';
        
        console.log(`Orden: ${this._idOrden}`);
        for( let computadora of this._computadoras){
            computadoraOrden +='\n {' + computadora.toString() + '} ';
           
        }
        console.log(`Productos: ${computadoraOrden}`)
        


    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get idProducto(){
        return this._idProducto;
    }

    get precio(){
        return this._precio;
    }
    
    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}  `;
    }
}


let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log( `${computadora1}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();