const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  ID: String,
  shortenedUrl: String,
  originalUrl: String,
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
