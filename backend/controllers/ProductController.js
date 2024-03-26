import Product from "../models/Product.js"

export class ProductController {

    // GET 
    static async getProducts(req,res){
        try{
        const products = await Product.find()
        
            if(products.length === 0){
                return res.status(404).json({msg: "Nenhum produto encontrado!"})
            }
    
            return res.status(200).json(products)
        }catch(error){
            console.log("Aconteceu o seguinte erro => " + error.message)
            return res.status(500).json({msg: error})
        }
    }

    // GET BY NAME
    static async getProductByName(req,res){
        try{
            const name = req.params.name  

            const products = await Product.find()
            
            const searchProducts = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
            console.log(searchProducts)
    
            if(searchProducts.length === 0){
                return res.status(404).json({msg: "Produto não encontrado!"})
            }
    
            return res.status(200).json(searchProducts)
        }catch(error){
            console.error("Erro ao buscar produto:", error);
            return res.status(500).json({ msg: "Erro ao buscar produto" });
        }
    }

    // GET BY ID
    static async getProductById(req,res){
        const id = req.params.id 

        const product = await Product.findById(id)

        if(!product){
            return res.status(404).json({msg: "Produto não encontrado!"})
        }

        return res.status(200).json(product)
    }


    // POST
    static async addProduct (req,res){
        const {name, size, price} = req.body 

        if(!name){
            return res.status(404).json({msg: "Preencha o nome do produto!"})
        }

        if(!price){
            return res.status(404).json({msg: "Preencha o preço do produto!"})
        }
        
        if(!size){
            return res.status(404).json({msg: "Preencha o tamanho do produto!"})
        }


        const newProduct = new Product({name,price,size})
        newProduct.save()

        return res.status(200).json({msg: "Produto cadastrado!", newProduct})
    }

    // PUT
    static async editProduct(req,res){
        const productEdit = req.body 
        const id =  req.params.id

        if(!productEdit)
        {
            return res.status(404).json({msg: "Nada há ser editado!"})
        }
        
        const productExist = await Product.findById(id)

        if(!productExist){
            return res.status(404).json({msg: "Produto não encontrado!"})
        }

        await Product.updateOne({_id: id}, productEdit)

        const newProduct = await Product.findById(id)

        return res.status(200).json({msg: "Produto alterado!", newProduct})

    }

    // DELETE
    static async deleteProduct(req,res){
        const id = req.params.id 

        const productExist = await Product.findById(id)

        if(!productExist){
            return res.status(404).json({msg: "Produto não encontrado!"})
        }

        await Product.deleteOne({_id: id})

        return res.status(200).json({msg: "Produto excluído"})
    }

    // SOMA DE QNTD DE PRODUTO E PREÇO TOTAL
    static async groupProduct(req,res){
        const qntdProduts = await Product.countDocuments()

        const sumPrice = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    totalPrice: {
                        $sum: "$price"
                    }
                }
            }
        ]);

        return res.status(200).json({qntdProduts, sumPrice})
    }
}