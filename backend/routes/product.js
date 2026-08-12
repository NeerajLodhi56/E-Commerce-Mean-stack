const express  = require('express');
const router = express.Router();
const Product  = require("../db/product")
const {getProducts, addProduct, updateProduct, deleteProduct, getProduct} = require('../handlers/product-handler');

router.get("", getProducts);
router.get("/:id", getProduct);
router.post("", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;