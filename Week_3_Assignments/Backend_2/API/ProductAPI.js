import exp from 'express';
import { ProductModel } from '../models/ProductModel.js';

export const productApp = exp.Router();

//Define Rest API's
productApp.post("/products", async(req,res)=>{
    //retrieve product details from here
    const newProd = req.body;
    //create new product document
    const newProductDocument = new ProductModel(newProd);
    //save
    const result = await newProductDocument.save()
    console.log("result: ", result);
    //send response
    res.status(200).json({message: "Product created"});
});

//Read all products
productApp.get("/products", async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).json({ message: "Products list", payload: products });
});

// Read product by productId
productApp.get("/products/:id", async (req, res) => {
    const pid = req.params.id;
    const product = await ProductModel.findOne({ productId: pid });
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product found", payload: product });
});

// Update product by productId
productApp.put("/products/:id", async (req, res) => {
    const pid = req.params.id;
    const modifiedProduct = req.body;
    const updatedProduct = await ProductModel.findOneAndUpdate(
        { productId: pid },
        { $set: { ...modifiedProduct } },
        { new: true, runValidators: true }
    );
    if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated", payload: updatedProduct });
});

// Delete product by productId
productApp.delete("/products/:id", async (req, res) => {
    const pid = req.params.id;
    const deletedProduct = await ProductModel.findOneAndDelete(pid);
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
});