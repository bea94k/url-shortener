// 1. setup - if I need any mocks
// 2. execution - actually running the functions
// 3. validation - is it what you expect it be?

//const helpers = require('../helpers');
// use: helpers.stripUrl

//const stripUrl = require('../helpers').stripUrl;
// use: stripUrl

const {
  randomChars,
  stripUrl,
  domainOfUrl,
  isDomainValid,
} = require("../helpers");
// use: stripUrl

describe("stripUrl function tests", function () {
  test("Strip URL containing http://", function () {
    // setup
    const url = "http://somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });

  test("Strip URL containing https://", function () {
    // setup
    const url = "https://somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });

  test("Strip URL containing www.", function () {
    // setup
    const url = "www.somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });

  test("Strip URL containing http://www.", function () {
    // setup
    const url = "http://www.somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });

  test("Strip URL containing https://www.", function () {
    // setup
    const url = "https://www.somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });

  test("Strip URL NOT containing http://, https:// or www.", function () {
    // setup
    const url = "somedomain.com";
    const expectedUrl = "somedomain.com";

    // execution
    const strippedUrl = stripUrl(url);

    // validation
    expect(strippedUrl).toBe(expectedUrl);
  });
});

describe("domainOfUrl function tests", function () {
  test("Extract domain of URL with no slashes", function () {
    const url = "somedomain.com";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with trailing slash", function () {
    const url = "somedomain.com/";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with one subdomain", function () {
    const url = "somedomain.com/details";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with one subdomain, with trailing slash", function () {
    const url = "somedomain.com/details/";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with two subdomains", function () {
    const url = "somedomain.com/details/more";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with two subdomains, with trailing slash", function () {
    const url = "somedomain.com/details/more/";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });
});
