const express = require("express");
const router = express.Router();
const { Productcontroller } = require("../controller/Product.controller");

router.get("/", Productcontroller.getAll);
router.get("/:id", Productcontroller.detailProduct);
router.post("/", Productcontroller.createProduct);
router.delete("/:id", Productcontroller.deleteProduct);
router.put("/:id", Productcontroller.updateProduct);

module.exports = router;
