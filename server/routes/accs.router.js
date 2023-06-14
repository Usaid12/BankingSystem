const express = require("express");
const router = express.Router();
const GetAllAccs = require("../controllers/GetAllAccs");

router.get("/", GetAllAccs);
module.exports = router;
