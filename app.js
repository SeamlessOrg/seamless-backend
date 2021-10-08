const express = require("express");
const cors = require("cors");

const app = express();

/* utils */
const middleware = require("./utils/middleware");
const config = require("./utils/config");

/* default middlewares */
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

/* error handler middlewares */
app.use(middleware.unknownEndpoint);

module.exports = app;
