import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  if (!product) {
    return res.json("Product not found");
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
