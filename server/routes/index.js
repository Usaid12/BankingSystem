const express = require("express");
const apiRouter = express.Router();
const CustomerRouter = require("./customer.router");
const TransactionHistory = require("./transactionsHistory.router");
const Transaction = require("./transaction.router");
const GetAllDetails = require("./details.router");
const GetAllAccs = require("../routes/accs.router");

apiRouter.use("/customers", CustomerRouter);
apiRouter.use("/transaction-history", TransactionHistory);
apiRouter.use("/accs", GetAllAccs);
apiRouter.use("/details", GetAllDetails);
apiRouter.use("/transaction", Transaction);

module.exports = apiRouter;
