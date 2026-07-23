const express = require('express');
const router = express.Router();
const Category  = require("../db/category")
const {getCategories, addCategory, updateCategory , deleteCategory} = require('../handlers/category-handlers');

router.get("", getCategories);
router.post("", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
module.exports = router;