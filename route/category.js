const express = require("express");
const router = express.Router();
const { Categorycontroller } = require("../controller/Category.controller");

router.post("/", Categorycontroller.createCategory);
router.delete("/:id", Categorycontroller.deleteCategory);
router.put("/:id", Categorycontroller.updateCategory);
router.get("/", Categorycontroller.Categoryall);
router.get("/:id", Categorycontroller.detailCategory);

module.exports = router;
