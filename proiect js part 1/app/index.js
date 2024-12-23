const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Nimica aici, modifica URL");
});

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});
