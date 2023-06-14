const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const databaseConnection = async () => {
  let conn;
  try {
    conn = await oracledb.getConnection({
      user: "system",
      password: "system",
      connectString: "localhost/orclpdb",
    });
    return conn;
  } catch (error) {
    
    throw error;
  }
};

module.exports = databaseConnection;
