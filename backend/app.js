const config = require("./config.js");

const express = require("express");
const bodyParser = require("body-parser");

const PORT = config.app.PORT;
const HOST = config.app.HOST;

const DBconnection = require("./db/db.service");
const urlService = require("./url/url.service");
const helpers = require("./helpers.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// connect to DB
DBconnection();

// test endpoint
app.get("/ping", (req, res) => {
  res.send("Hello, seems like the testing endpoint works!");
});

// get all entries from the DB
// for development, users shouldn't access it
/* app.get("/getAll", (req, res) => {
  urlService
    .getAll()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      return err;
    });
}); */

// save a new url
app.post("/shortenme", (req, res) => {
  const strippedUrl = helpers.stripUrl(req.body.originalUrl);
  console.log("stripped url: " + strippedUrl);
  if (helpers.isUrlValid(strippedUrl)) {
    console.log("stripped url is valid");
    urlService
      .createUrl(strippedUrl)
      .then((response) => {
        // sends back just the shortened path
        // TO DO: add 'http:..' and my domain here
        res.send(response);
      })
      .catch((err) => {
        return err;
      });
  } else {
    console.log("stripped url is NOT valid");
    res.send("Invalid URL");
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server started at ${HOST}:${PORT}.`);
});
