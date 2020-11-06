const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const cors = require("cors");

const PORT = process.env.PORT || 8080;

const DBconnection = require("./db/db.service");
const urlService = require("./url/url.service");
const helpers = require("./helpers.js");

const app = express();

app.use(express.json());

// allow cross-origin
app.use(cors());

// connect to DB
DBconnection();

// use the current directory
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

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

// get to a specific shortened url - redirect to the original url
app.get("/:shortenedPath", (req, res) => {
  urlService
    .getOne("shortenedPath", `/${req.params.shortenedPath}`)
    .then((response) => {
      // response is an array - empty for no entries in db
      if (response.length === 1) {
        res.redirect(`http://${response[0].originalUrl}`);
      } else if (response.length === 0) {
        res.status(404).send("no entries found");
      } else {
        res
          .status(500)
          .send(
            "Oops, something went wrong. Do we accidentally have two entries with that path?"
          );
      }
    })
    .catch((err) => {
      return err;
    });
});

// save a new url
app.post("/shortenme", async (req, res) => {
  try {
    let response = "";
    // take away http or www from the beginning - the original url to be eventually saved to db
    const strippedUrl = helpers.stripUrl(req.body.originalUrl);
    console.log("stripped url: " + strippedUrl);

    // take the domain out of the url
    const domain = helpers.domainOfUrl(strippedUrl);

    if (helpers.isDomainValid(domain)) {
      console.log("stripped url has a valid domain");
      // check if the stripped url is already in the db
      const urlFromDB = await urlService.getOne("originalUrl", strippedUrl);

      // send back just the shortened path either from exissting DB entry or after saving new one
      if (urlFromDB.length === 1) {
        response = urlFromDB[0].shortenedPath;
      } else if (urlFromDB.length === 0) {
        response = await urlService.createUrl(strippedUrl);
      }
    } else {
      console.log("stripped url is NOT valid");
      throw new Error("Invalid URL");
    }
    res.send(response);
  } catch (err) {
    res.status(400).send(JSON.stringify({ message: err.message }));
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}.`);
});
