//   **************************************************************************************

const express = require("express");
const router = express.Router();
const {
  addData,
  getData,
  updateData,
  deleteData,
} = require("../middleware/productControl"); // updated path

// REST API endpoints
router.post("/add", addData);
router.get("/list", getData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

module.exports = router;

