const express = require('express');
const router = express.Router();
const Product  = require("../db/product")
const {getBrands, getBrandById, addBrand, updateBrand, deleteBrand} = require('../handlers/brand-handler');

router.post("", async (req,res)=>{
    console.log("here..");
    let model = req.body;
    let result = await addBrand(model);
    res.send(result);
})

router.put("/:id", updateBrand);

router.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let result = await deleteBrand(id);
    res.send({message:"deleted"});
})

router.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let result = await getBrandById(id);
    res.send(result);
})

router.get("", async(req,res)=>{
    let result = await getBrands();
    res.send(result);
})

module.exports = router;