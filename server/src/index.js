require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const { login } = require("./routes/auth");

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

app.get("/api/instances", (req, res) => {
  res.send("hello");
});

// todo: complete auth middleware
login(app);

app.listen(8080, () => {
  console.log("Server up and running at localhost:8080");
});
