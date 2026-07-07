const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const categoryRoutes = require('./routes/category');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server running');
});
app.use("/category", categoryRoutes);
 async function connectDB() {
     await  mongoose.connect("mongodb://localhost:27017",{
        dbName:"e-comm-store-db"
    });

    console.log("db connected");
 }
 connectDB().catch((err) => {
    console.log(err);
 });

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});