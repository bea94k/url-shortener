const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortenedUrl: String,
  originalUrl: String,
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
