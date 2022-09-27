const Product = require("../models/Product");
const _ = require("lodash");
// const slugify = require('slugify')
const fs = require("fs");

class Productcontroller {
  static async createProduct(req, res) {
    const product = await new Product();
    product.save();
    if (!product)
      return res.status(400).send({ error_message: "Not save product" });
    res.send(product);
  }

  static async deleteProduct(req, res) {
    const products = await Product.findByIdAndDelete(req.params.id);

    if (!products) res.status(404).send({ error: "Product not delete" });
    res.status(200).send({ message: "Product delete success!" });
  }

  static async getAll(req, res) {
    //Loc san pham theo danh muc
    let filter = {};
    if (req.query.categories) {
      filter = { category: req.query.categories.split(",") };
    }
    if (req.query.increase) {
      filter.price = { $gte: req.query.increase };
    }
    if (req.query.decrease) {
      filter.price = { $lte: req.query.decrease };
    }
    //lay ra danh dach category
    const productList = await Product.find(filter).populate("category");

    if (!productList) res.status(404).send({ error: "Not Found" });
    res.status(200).send(productList);
  }

  //Lay tung danh sach product
  static async detailProduct(req, res) {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) res.status(404).send({ error: "Not found" });
    res.status(200).send(product);
  }

  static async updateProduct(req, res) {
    const formdata = req.body;
    const update = await Product.findByIdAndUpdate(req.params.id, formdata);
    if (!update) res.status(404).send({ error: "Product not update" });
    res.send(update);
  }
}

module.exports.Productcontroller = Productcontroller;
