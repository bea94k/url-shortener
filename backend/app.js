const config = require("./config.js");

const express = require("express");

const PORT = config.app.PORT;
const HOST = config.app.HOST;

const DBconnection = require("./db/db.service");
const urlService = require("./url/url.service");

const app = express();
// app.use(express.json());

// connect to DB
DBconnection();

// test endpoint
app.get("/ping", (req, res) => {
  res.send("Hello, seems like the testing endpoint works!");
});

// get all entries from the DB
app.get("/getAll", (req, res) => {
  urlService
    .getAll()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      return err;
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Server started at ${HOST}:${PORT}.`);
});
