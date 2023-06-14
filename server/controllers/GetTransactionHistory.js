const databaseConnection = require("../database");
const GetTransactionHistory = async (req, res, next) => {
  try {
    const conn = await databaseConnection();

    const transactionQuery = `SELECT ROW_NUMBER() OVER (ORDER BY TDATE) AS UNIQUE_ID, DESTACC, SRCACC, TAMOUNT,TO_CHAR(TDATE,'YYYY-MM-DD') AS PKT_TIME FROM TRANSACTIONS`;
    const transactionHistoryRows = await conn.execute(transactionQuery);
    if (transactionHistoryRows.rows.length > 0) {
      res.json(transactionHistoryRows.rows);
    } else {
      res.status(404).json({ message: "No history found" });
    }
  } catch (error) {
   
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = GetTransactionHistory;
