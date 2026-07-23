const Category = require("../db/category");


const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.send(categories);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const addCategory = async (req, res) => {
    try {
        const postModel = req.body;
        const category = new Category({
            name: postModel.name
        });
        await category.save();
        res.send(category.toObject());
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const putModel = req.body;
        const id = req.params.id;
        await Category.findOneAndUpdate(
            { _id: id },
            putModel
        );
        res.send({
            message: "ok"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        await Category.findOneAndDelete(
            { _id: id },    
        );
        res.send({
            message: "deleted"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

module.exports = {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
};