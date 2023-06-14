const databaseConnection = require("../database");

const transaction = async (req, res, next) => {
  try {
    const conn = await databaseConnection();
    const { srcAcc, destAcc, amount } = req.body;

    const sourceBalanceQuery = `SELECT BALANCE FROM CUSTOMER WHERE ACCNO=${srcAcc}`;
    const sourceBalanceRows = await conn.execute(sourceBalanceQuery);
    let sourceBalance = sourceBalanceRows.rows.map((bal) => bal.BALANCE);
    sourceBalance = sourceBalance[0];
   

    if (sourceBalance >= amount) {
      const updateSourceQuery = `UPDATE CUSTOMER SET BALANCE=BALANCE-${amount} WHERE ACCNO=${srcAcc}`;
      await conn.execute(updateSourceQuery);

      const updateDestQuery = `UPDATE CUSTOMER SET BALANCE=BALANCE+${amount} WHERE ACCNO=${destAcc}`;
      await conn.execute(updateDestQuery);

      const insertTransactionQuery = `INSERT INTO TRANSACTIONS (SRCACC, DESTACC, TAMOUNT, TDATE) VALUES (${srcAcc}, ${destAcc}, ${amount}, SYSDATE)`;
      await conn.execute(insertTransactionQuery);

      await conn.execute("COMMIT");
    } else {
      const rollback = await conn.execute("ROLLBACK");
      await conn.close();
      res.status(401).json({ message: "Insufficient Balance" });
      return;
    }

    await conn.close();
    res.json({ message: "Success" });
  } catch (error) {
   
    res.status(500).json({ error: error.message });
  }
};

module.exports = transaction;
