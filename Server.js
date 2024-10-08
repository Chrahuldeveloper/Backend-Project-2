const express = require("express");
const mongoose = require("mongoose");
const registerRoute = require("./src/routes/Register.js");
const LoginRoute = require("./src/routes/Login.js");

const app = express();
const PORT = 9000;

app.use(express.json());
app.use("/register", registerRoute);
app.use("/login", LoginRoute);

const startServer = async () => {
  console.log(`Server Started at http://localhost:${PORT}`);
};

const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("DB connection established");
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, async () => {
  await dbconnection();
  startServer();
});
