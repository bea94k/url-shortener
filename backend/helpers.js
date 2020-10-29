const randomChars = (
  length,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) => {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

// strip the url from http, https and/or www
const stripUrl = (url) => {
  if (url.indexOf("http://") === 0) {
    // if found, cut out the http://
    url = url.slice(7);
  }
  if (url.indexOf("https://") === 0) {
    // if found, cut out the https://
    url = url.slice(8);
  }
  if (url.indexOf("www.") === 0) {
    // if found, cut out the www.
    url = url.slice(4);
  }
  return url;
};

//regex for domains
// one letter or digit
// optional: 0-62 letters or digits or dash, last one can't be a dash
// zero or one of the above segment
// dot and same rules for the segment after the dot
// one or more ".something" segments
// optional / and same rule for subpage addresses
// all case insensitive
const domainRegex = /^[a-z\d]([a-z\d-]{0,61}[a-z\d])?(.[a-z\d]([a-z\d-]{0,61}[a-z\d])?)+(\/[a-z\d-]{0,61}[a-z\d])*$/i;

const isUrlValid = (url) => {
  var obj = domainRegex.exec(url);
  // if url passes the regex, object exists, otherwise returns null
  if (obj != null) {
    return true;
  } else {
    return false;
  }
};

module.exports = { randomChars, stripUrl, isUrlValid };
