class Producmanager {
    constructor(){
        this.products=[]
    }

static id = 0

addProduct(titulo,  descripcion,precio, imagen, codigo, stock){
    for(let i  = 0 ; i< this.products.length; i++){
        if(this.products[i].codigo === codigo){
            console.log(`Codigo ${codigo}  repetido`); break;
        } 
    }
const newProduct = {titulo,  descripcion,precio, imagen, codigo, stock}
if(!Object.values(newProduct).includes(undefined)){

Producmanager.id++;
this.products.push({...newProduct, id:Producmanager.id});
}
else{   
console.log("Se necesitan todos los campos")
}
}


getProduct(){
    return this.products;
}
existe(id){
    return this.products.find((producto)=>producto.id === id)
}    


getProductById(id){
!this.existe(id) ? console.log("Not found") :
console.log(this.existe(id))
}}

const productos = new Producmanager

//1era Llamada
console.log(productos.getProduct())

//Productos agregados
productos.addProduct('producto de prueba','descripcion1','5000', 'imagen1', 'abc123','25')
productos.addProduct('producto de prueba2','descripcion2','6000', 'imagen2', 'abc456','90')
productos.addProduct('descripcion3','7000', 'imagen6', 'abc56','90')

//2da Llamada
console.log(productos.getProduct())
//codigo repetido
productos.addProduct('producto de prueba3','descripcion3','8000', 'imagen3', 'abc456','10')

//Busqueda por Id
productos.getProductById(3)

//Busqueda por Id no exite
productos.getProductById(5)
