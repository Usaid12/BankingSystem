const express = require("express");
const router = express.Router();
const GetAllDetails = require("../controllers/GetAllDetails");

router.post("/", GetAllDetails);
module.exports = router;
