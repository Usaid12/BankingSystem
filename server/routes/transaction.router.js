const express = require("express");
const router = express.Router();
const transaction = require("../controllers/Transaction");

router.post("/", transaction);
module.exports = router;
