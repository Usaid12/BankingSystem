const express = require("express");
const app = express();
const PORT = 3000;
const BaseRouter = require("./routes");
const cors=require("cors")
app.use(cors())
app.use(express.json());
app.use("/", BaseRouter);
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
