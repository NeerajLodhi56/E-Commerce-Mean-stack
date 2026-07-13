const category = require('./../db/category')
async function addCategory(model){
let model1 = req.body;

let category = new Category({
    name: model1.name,
})

category.save();
res.send(category.object());
}

module.exports = router;