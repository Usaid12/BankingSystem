const databaseConnection = require("../database");

const GetAllCustomers = async (req, res, next) => {
  try {
    const conn = await databaseConnection();
    const allCustomers = await conn.execute(
      "SELECT CUSTNAME,CUSTID,ACCNO FROM CUSTOMER"
    );
    await conn.close();
    res.json(allCustomers.rows);
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
module.exports = GetAllCustomers;
