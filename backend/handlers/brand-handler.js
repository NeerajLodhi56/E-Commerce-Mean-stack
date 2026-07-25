const Brand = require("../db/brand");

async function getBrands(){
    let brands =  await Brand.find();
    return brands.map(x=>x.toObject());
} 

async function getBrandById(id){
let brand = await Brand.findById(id);
return brand.toObject();
}

async function addBrand(model){
let brand = new Brand({
    name: model.name
});
await brand.save();
return brand.toObject();
}

const updateBrand = async (req, res) => {
 try {
        const putModel = req.body;
        const id = req.params.id;
        await Brand.findOneAndUpdate(
        { _id: id },
            putModel)
        res.send({
            message: "ok"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }

}

async function deleteBrand(id){
    await Brand.findByIdAndDelete(id);
}

module.exports = {getBrands, getBrandById, addBrand, updateBrand, deleteBrand}