//importing lib
const express = require("express");
// const products = require("../model/Products");
const router = express.Router();

//import model
let products = [
  ["id", "title", "description"],
  [1, "cool", "this is cool drink"],
];

let [key, ...value] = products;
// const product = require("../model/Products");

//Route creation
router.get("/", async (req, res) => {
  // console.log("hi get!");
  products.map((e) => {
    // console.log("hi products");
    res.json(e);
  });
});

router.get("/:id", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  let { id, title, description } = req.body;
  products.push();
  res.json(products);
});

router.delete("/:id", (req, res) => {
  products.map((e) => {
    if (e.id === id) {
      products.pop(e);
    }
  });
});
module.exports = router;
