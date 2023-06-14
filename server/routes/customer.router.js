const express = require("express");
const router = express.Router();
const GetAllCustomers = require("../controllers/GetAllCustomers");

router.get("/", GetAllCustomers);
module.exports = router;
