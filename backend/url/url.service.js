// import the model to be able to create new instances
const helpers = require("../helpers");
const Url = require("./url.schema");

const getAll = async () => {
  const allEntries = await Url.find();
  return allEntries;
};

const getOne = async (key, value) => {
  const foundEntries = await Url.find({ [key]: value }).exec();
  //returns an array of entries, even if just one entry or empty array
  return foundEntries;
};

const createUrl = async (originalUrl) => {
  const randomSixChars = await helpers.randomChars(6);

  const newUrl = new Url({
    originalUrl: originalUrl,
    shortenedPath: `/${randomSixChars}`,
  });
  return newUrl
    .save()
    .then((doc) => {
      console.log("Entry saved to db is:");
      console.log(doc);
      return doc.shortenedPath;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { getAll, getOne, createUrl };
