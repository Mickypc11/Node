class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase

    
    constructor(nombre, apellido,edad){
        this._nombre = nombre; 
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
        
    }
    get idPersona(){
        return this._idPersona;
    }
    set idPersona(idPersona){
        this._idPersona = idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido+ ' Edad:'+ this._edad ;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;
   
    
    constructor(nombre, apellido ,edad, sueldo){
        super(nombre, apellido,edad);//llamar al constructor de la clase padre
        this._sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    get empleado(){
        return this.idEmpleado;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ',ID EMPLEADO: ' + this.idEmpleado+ ',Sueldo: ' + this._sueldo;
    }
}


class Cliente extends Persona{

    static contadorCliente = 0;
   
    
    constructor(nombre, apellido, edad){
        super(nombre, apellido,edad);//llamar al constructor de la clase padre
        this._fechaRegistro = new Date();
        this.idCliente = ++Cliente.contadorCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this.idCliente;
    }
    set idCliente(idCliente){
        this._idCliente = idCliente;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+ ', ID CLIENTE: ' + this._idCliente + ', Fecha: ' + this._fechaRegistro;
    }
}

let persona1 = new Persona('Juan', 'Perez',18);
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez',20, '1000');
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas );

let persona2 = new Persona('Karla', 'Ramirez',20);
console.log( persona2.toString() );
console.log( Persona.contadorPersonas);


let persona3 = new Persona('Mariano', 'Lara',22);
let persona4 = new Cliente('Armando', 'Toledo', '20');
let persona5 = new Cliente('Laura', 'Quintero',33);
console.log( persona4.toString() );
console.log( persona5.toString() );
