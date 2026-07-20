const express = require('express');
const router = express.Router();
const Category  = require("../db/category")
const { addCategory, updateCategory } = require('../handlers/category-handlers');
router.post("", addCategory);
router.put("/:id", updateCategory);
module.exports = router;