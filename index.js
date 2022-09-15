const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectToDB = require("./src/helpers/databaseConnection");

const app = express();

//Basic Setup
app.use(cors());
app.use(express.json());
connectToDB();

const PORT = process.env.PORT || 5000;

// routes connection
app.use("/user", require("./src/routes/User"));

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
