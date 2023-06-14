const databaseConnection = require("../database");

const GetAllAccs = async (req, res, next) => {
  try {
    const conn = await databaseConnection();
    const allAccs = await conn.execute("SELECT ACCNO,CUSTNAME FROM CUSTOMER");
    await conn.close();
    res.json(allAccs.rows);
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};
module.exports = GetAllAccs;
