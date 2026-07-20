const Category = require("../db/category");

const addCategory = async (req, res) => {
    try {
        console.log("here..");

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
        console.log("here....");

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

module.exports = {
    addCategory,
    updateCategory
};