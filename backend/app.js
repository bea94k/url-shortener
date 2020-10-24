const config = require("./config.js");

const express = require("express");

const PORT = config.app.PORT;
const HOST = config.app.HOST;

const app = express();
// app.use(express.json());

// test endpoint
app.get("/ping", (req, res) => {
  res.send("Hello, seems like the testing endpoint works!");
});

app.listen(PORT, HOST, () => {
  console.log(`Server started at ${HOST}:${PORT}.`);
});
