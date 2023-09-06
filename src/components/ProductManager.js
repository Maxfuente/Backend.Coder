    import {  promises as fs } from "fs";

export default class ProductManager {
    constructor() {
        this.patch = "./productos.txt";
        this.products = [];
    }

    static id = 0;

    addProduct = async (titulo, descripcion, precio, imagen, codigo, stock) => {

        ProductManager.id++;

        let newProduct = {
            titulo, descripcion, precio, imagen, codigo, stock, id: ProductManager.id
        };

        this.products.push(newProduct);

        await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8");
        return JSON.parse(respuesta);
    };

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)

    }
    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        if (!respuesta3.find((product) => product.id === id)){
            console.log("No existe");
        } else {
            console.log(respuesta3.find((product) => product.id === id));
        }

    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter((products) => products.id != id);
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("products deleted")
    }

    updateProducts = async ({id, ...producto})=>{
        await this.deleteProductsById(id);
        let productOld = await this.readProducts();
        let productmodif = [{ ...producto, id}, ...productOld ];
        await fs.writeFile(this.patch,JSON.stringify(productmodif));
    }

}
//const productos = new ProductManager


/*productos.addProduct('producto de prueba', 'descripcion1', '5000', 'imagen1', 'abc123', '25')
productos.addProduct('producto de prueba2', 'descripcion2', '8000', 'imagen2', 'abc456', '20')
productos.addProduct('producto de prueba3', 'descripcion3', '9000', 'imagen3', 'abc789', '30')
productos.addProduct('producto de prueba4', 'descripcion4', '5000', 'imagen4', 'abc234', '25')
productos.addProduct('producto de prueba5', 'descripcion5', '8000', 'imagen5', 'abc567', '20')
productos.addProduct('producto de prueba6', 'descripcion6', '9000', 'imagen6', 'abc890', '30')
productos.addProduct('producto de prueba7', 'descripcion7', '5000', 'imagen7', 'abc111', '25')
productos.addProduct('producto de prueba8', 'descripcion8', '8000', 'imagen8', 'abc222', '20')
productos.addProduct('producto de prueba9', 'descripcion9', '9000', 'imagen9', 'abc333', '30')*/

//productos.getProducts()

//productos.getProductsById(3)

//productos.deleteProductsById(2)

/*productos.updateProducts({
    titulo: 'producto de prueba3',
    descripcion: 'descripcion3',
    precio: '4000',
    imagen: 'imagen3',
    codigo: 'abc789',
    stock: '30',
    id: 3
})*/