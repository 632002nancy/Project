const express = require("express");
const { addDetails , showDetails} = require("../controller/lead-controller.js");

const router = express.Router();

router.post("/", addDetails);   //create
router.get("/", showDetails);   //read

module.exports = router;