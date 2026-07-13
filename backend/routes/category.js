const express = require('express');
const router = express.Router();
const Category  = require("../db/category")
const { addCategory } = require('../handlers/category-handlers');
router.post("",  async(req,res)=>{
    console.log("here..")
 let model1 =  req.body;
let result = await addCategory(model1);
res.send(result);

})

router.put("/:id",  async(req,res)=>{
   console.log("here....")
 let model =  req.body;
 let id = req.params['id']; 
 await Category.findOneAndUpdate({_id:id},model);


res.send({message:"ok"});

})
module.exports = router;