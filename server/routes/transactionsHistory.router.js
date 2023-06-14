const express = require("express");
const router = express.Router();
const GetTransactionHistory = require("../controllers/GetTransactionHistory");

router.get("/", GetTransactionHistory);
module.exports = router;
