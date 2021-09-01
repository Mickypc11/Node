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

class Orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 0;
    }
    constructor ( ){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;

    }

    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++]= producto; agregar producto de forma de apuntador

        }
        else{
            console.log('No se puede agregar mas arreglos')
        }
    }
    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){
            totalVenta=totalVenta+producto.precio; //== totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostarOrden(){

        let productosOrden ='';
        for( let producto of this._productos){
            productosOrden +='\n {' + producto.toString() + '} ';


        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: $${productosOrden}  `);


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
let producto3 = new Producto('calzones', 100);

console.log( producto1.toString() );
console.log( producto2.toString() );

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden2.mostarOrden();

