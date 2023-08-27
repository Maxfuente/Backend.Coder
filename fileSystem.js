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

    readProducts = async()=>{
        let respuesta =  await fs.readFile(this.patch,"utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async()=>{
      let respuesta2 =  await this.readProducts()
      return console.log(respuesta2)

    }
    getProductsById = async(id)=>{
        let respuesta3 =  await this.readProducts()  
        if (!respuesta3.find(products => products.id===id)){
            console.log("No existe");
        } else {
            console.log(respuesta3.find(products => products.id===id))
        }

    }


    deleteProductsById = async(id) =>{
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter))
    }
    }
const productos = new ProductManager


productos.addProduct('producto de prueba','descripcion1','5000', 'imagen1', 'abc123','25')
productos.addProduct('producto de prueba2','descripcion2','8000', 'imagen2', 'abc456','20')

//productos.getProducts()
//productos.getProductsById(3)
productos.deleteProductsById(2)