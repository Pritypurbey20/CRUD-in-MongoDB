const Product = require('../model/Products');

//get all get
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.json({ message: error });
    }
};

//get data for a specific id:
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};
//create data
const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        details: req.body.details
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};
//Update data
const product_update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}