// import the model to be able to create new instances
const Url = require("./url.schema");

const createUrl = async (originalUrl) => {
  const newUrl = new Url({
    ID: "abc",
    originalUrl: originalUrl,
    shortenedUrl: "localhost:3000/abc",
  });
  return newUrl
    .save()
    .then((doc) => {
      console.log(doc);
      return doc.shortenedUrl;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { createUrl };
