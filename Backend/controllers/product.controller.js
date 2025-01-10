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
      return res.json("Product already exists");
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
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const product = await Product.findOne({category: req.body.category});
    if (product.length === 0) {
      return res.json("No Products in inventory");
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json("No Products in inventory");
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json("No Products in inventory");
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json("No Products in inventory");
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { findAll, findProduct, create, update, remove };


// [
//   {
//     "company": "TestCorp",
//     "prodName": "Laptop Basics",
//     "description": "A basic laptop for everyday tasks",
//     "price": 999.99,
//     "category": "Electronics",
//     "stock": 100,
//     "image": "https://example.com/images/laptop.jpg"
//   },
//   {
//     "company": "AnotherBrand",
//     "prodName": "Gaming Mouse",
//     "description": "High precision mouse with programmable buttons",
//     "price": 49.99,
//     "category": "Accessories",
//     "stock": 250,
//     "image": "https://example.com/images/mouse.jpg"
//   },
//   {
//     "company": "AudioX",
//     "prodName": "Noise Cancelling Headphones",
//     "description": "Over-ear headphones with active noise cancellation",
//     "price": 199.99,
//     "category": "Audio",
//     "stock": 75,
//     "image": "https://example.com/images/headphones.jpg"
//   },
//   {
//     "company": "FutureTech",
//     "prodName": "VR Headset",
//     "description": "Virtual reality headset with 4K resolution",
//     "price": 399.99,
//     "category": "Electronics",
//     "stock": 30,
//     "image": "https://example.com/images/vrheadset.jpg"
//   },
//   {
//     "company": "PowerStore",
//     "prodName": "Portable Charger",
//     "description": "High-capacity power bank with fast charging",
//     "price": 29.99,
//     "category": "Accessories",
//     "stock": 500,
//     "image": "https://example.com/images/powerbank.jpg"
//   }
// ]