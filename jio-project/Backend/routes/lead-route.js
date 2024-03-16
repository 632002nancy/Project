const express = require("express");
const { addDetails , showDetails} = require("../controller/lead-controller.js");

const router = express.Router();

router.post("/details", addDetails);   //create
router.get("/getdetails", showDetails);   //read

module.exports = router;