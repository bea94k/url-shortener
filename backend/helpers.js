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

// take only the domain out of the url
// to be used on urls stripped from http://
const domainOfUrl = (url) => {
  if (url.indexOf("/") !== -1) {
    url = url.slice(0, url.indexOf("/"));
  }
  return url;
};

//regex for domains
// one letter or digit
// optional: 0-62 letters or digits or dash, last one can't be a dash
// zero or one of the above segment
// dot and same rules for the segment after the dot
// one or more ".something" segments
// all case insensitive
const domainRegex = /^[a-z\d]([a-z\d-]{0,61}[a-z\d])?(\.[a-z\d]([a-z\d-]{0,61}[a-z\d])?)+$/i;

const isDomainValid = (domain) => {
  var obj = domainRegex.exec(domain);
  // if url passes the regex, object exists, otherwise returns null
  if (obj != null) {
    return true;
  } else {
    return false;
  }
};

module.exports = { randomChars, stripUrl, domainOfUrl, isDomainValid };
