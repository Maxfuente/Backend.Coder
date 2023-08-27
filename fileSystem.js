import {promises as fs} from "fs"

class ProductManager   {
    constructor(){
        this.patch = "./productos.txt"
        this.products =[]
    }

    static id = 0

    addProduct = async(titulo,  descripcion,precio, imagen, codigo, stock) => {

        ProductManager.id++

        let newProduct  = {
            titulo,  descripcion,precio, imagen, codigo, stock , id: ProductManager.id
        }

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products))
    }

    getProducts = async()=>{
      let respuesta =  await fs.readFile(this.patch,"utf-8")
      console.log(JSON.parse(respuesta))

    }
    }
const productos = new ProductManager


productos.addProduct('producto de prueba','descripcion1','5000', 'imagen1', 'abc123','25')
productos.addProduct('producto de prueba2','descripcion2','8000', 'imagen2', 'abc456','20')

productos.getProducts()
