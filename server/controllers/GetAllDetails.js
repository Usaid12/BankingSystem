const databaseConnection = require("../database");

const GetAllDetails = async (req, res, next) => {
  try {
    const conn = await databaseConnection();
    const { userId } = req.body;
    const details = await conn.execute(
      `SELECT CUSTNAME,CUSTID,CUSTEMAIL,BALANCE FROM CUSTOMER WHERE CUSTID=${userId}`
    );
    await conn.close();
    res.json(details.rows);
  } catch (error) {
    
    res.status(500).json({ error: "hello" });
  }
};
module.exports = GetAllDetails;
