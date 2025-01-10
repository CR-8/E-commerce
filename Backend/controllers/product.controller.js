import Product from "../models/product.model.js";

const create = async (req, res) => {
  try {
    const prodExist = await Product.findOne({
      $or: [
        { company: req.body.company },
        { prodName: req.body.prodName },
        { category: req.body.category },
        { price: req.body.price },
      ],
    });
    if (prodExist) {
      return res.send("Product already exists");
    }
    const product = new Product({
      company: req.body.company,
      prodName: req.body.prodName,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      image: req.body.image,
    });
    product.save();
    res.json("Product added\n" + product);
  } catch (err) {
    res.json("Internal Server Error");
  }
};

const findAll = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length === 0) {
      return res.json("No Products in inventory");
    }
    res.json("list of products\n" + product);
  } catch (err) {
    res.json("Internal Server Error");
  }
};

const findProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product.length === 0) {
      return res.json("No Products in inventory");
    }
    res.json(" product details\n" + product);
  } catch (err) {
    res.json("Internal Server Error");
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
  } catch (error) {
    res.json("Internal Server Error");
  }
};
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
  } catch (error) {
    res.json("Internal Server Error");
  }
};

export default { findAll, findProduct, create, update };
