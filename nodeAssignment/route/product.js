//importing lib
const express = require("express");
// const products = require("../model/Products");
const router = express.Router();

//import model
let products = [
  ["id", "title", "description"],
  // [1, "cool", "this is cool drink"],
];

// const product = require("../model/Products");

//Route creation
router.get("/", async (req, res) => {
  // console.log("hi get!");
  products.map((e) => {
    // console.log("hi products");
    res.json(e);
  });
});
router.post("/", async (req, res) => {
  let { id, title, description } = req.body;
  products.push([id, title, description]);
  res.json(products);
});
module.exports = router;
