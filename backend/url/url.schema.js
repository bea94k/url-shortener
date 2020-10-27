const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortenedPath: String,
  originalUrl: String,
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
