var cors = require("cors");
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");
const instances = require("./routes/instances");

const app = express();

const corsOptions = {
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "10mb" }));
auth(app);

instances(app);

app.listen(8080, () => {
  console.log("Server up and running at localhost:8080");
});
