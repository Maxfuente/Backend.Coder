import express, { request, response } from "express";
import ProductManager from "./components/ProductManager.js";

const app = express();
app.use(express.urlencoded({extended : true }));

const productos = new ProductManager()
const readProducts = productos.readProducts()

app.get("/products", async(request,response)=>{
    let limit =  parseInt(request.query.limit);
    if (!limit) return response.send(await readProducts)
    let allproducts = await readProducts
    let productLimit = allproducts.slice(0,limit)  
    response.send( productLimit);
});
app.get("/products/:id", async(request,response)=>{
    let id = parseInt(request.params.id);
    let allproducts = await readProducts
    let productsById = allproducts.find(product => product.id === id)
    response.send(productsById);
})


const PORT = 7070;
const server  = app.listen(PORT,()=>{
    console.log(`Express por Local Host ${server.address().port}`)
})
server.on("error", (error)=> console.log(`Error del sErvidor ${error}`))
