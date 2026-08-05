const Product = require("../db/product")


const getProducts =  async(req,res)=>{
    try{
        const products =  await Product.find({})
        res.send(products);
    }catch(error){
        res.status(500).send({
            message: error.message
        }); 
    }   
}

const updateProduct = async (req,res)=>{
    try{
        const putModel = req.body;
        const id = req.params.id;
        await Product.findOneAndUpdate(
            {_id: id},
            putModel
        );
        res.send({
            message: "ok"
        }
    )
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
}
const addProduct =  async (req,res)=>{
    try{
       const postmodel = req.body;
       const product = new Product({
           ...postmodel
       });
       await product.save();
       res.send(product.toObject());
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const id = req.params.id;
        await Product.findOneAndDelete(
            {_id: id}
        );
        res.send({
            message: "deleted"
        })
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
}

const getProduct = async (req,res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findOne({_id: id});
        res.send(product);
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
}


module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct
}   