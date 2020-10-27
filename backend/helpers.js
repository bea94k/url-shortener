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
  //console.log(url);
  if (url.indexOf("http://") === 0) {
    //console.log("found http at the very beginning of the url");
    url = url.slice(7);
    //console.log(url);
  }
  if (url.indexOf("https://") === 0) {
    //console.log("found https at the very beginning of the url");
    url = url.slice(8);
    //console.log(url);
  }
  if (url.indexOf("www.") === 0) {
    //console.log("found www at the beginning of the url");
    url = url.slice(4);
    //console.log(url);
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
  //console.log(obj);
  if (obj != null) {
    //console.log("Url matching regex - valid");
    return true;
  } else {
    //console.log("Url NOT matching regex - invalid");
    return false;
  }
};

module.exports = { randomChars, stripUrl, isUrlValid };
