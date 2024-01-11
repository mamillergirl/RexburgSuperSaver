const express = require("express");
const  broulimsController = require("../controllers/broulims.js");

const router = express.Router();

router.get("/",
broulimsController.getAll);

router.get("/:id", 

  broulimsController.getOne);
router.post("/", 

 broulimsController.createOne);
router.put("/:id", 
  broulimsController.updateOne);
router.delete("/:id",
  broulimsController.deleteOne);

module.exports = router;
