class Producto{

    static contadorProducto = 0;

    constructor (nombre, precio){
        this._idProducto= ++Producto.contadorProducto;
        this._nombre=nombre;
        this._precio= precio;

    }

    get nombre(){
        return this._nombre;
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

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);
console.log( producto1.toString() );
console.log( producto2.toString() );