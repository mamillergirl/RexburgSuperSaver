const express = require("express");
const  albertsonsController = require("../controllers/albertsons.js");

const router = express.Router();

router.get("/",
albertsonsController.getAll);
// router.get("/:id", 

//   albertsonsController.getOne);
// router.post("/", 

//  albertsonsController.createOne);
// router.put("/:id", 
//   albertsonsController.updateOne);
// router.delete("/:id",
//   albertsonsController.deleteOne);

module.exports = router;
