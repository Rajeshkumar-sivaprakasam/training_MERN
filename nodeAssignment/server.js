//import lib
const express = require("express");
const cors = require("cors");
const path = require("path");
//import model
const products = require("./route/product");

//declare express
const app = express();

//Body parser

app.use(express.json());
// app.use(cors());
//route
app.use("/product", products);

const port = 5000;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
