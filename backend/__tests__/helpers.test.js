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

  test("Extract domain of URL with one path", function () {
    const url = "somedomain.com/details";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with one path, with trailing slash", function () {
    const url = "somedomain.com/details/";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with two paths", function () {
    const url = "somedomain.com/details/more";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });

  test("Extract domain of URL with two paths, with trailing slash", function () {
    const url = "somedomain.com/details/more/";
    const expectedUrl = "somedomain.com";

    const domain = domainOfUrl(url);

    expect(domain).toBe(expectedUrl);
  });
});

describe("isDomainValid function tests", function () {
  test("Plain domain name is valid", function () {
    const domain = "somedomain.com";
    const expectedValidity = true;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
    // expect(validity).toBe(true);

    // truthy and falsy - treat 0 as falsy, so here it is risky
    // expect(validity).toBeTruthy();
    // expect(validity).not.toBeFalsy();
  });

  test("Plain domain name including dash is valid", function () {
    const domain = "some-domain.com";
    const expectedValidity = true;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Plain domain name with two extensions is valid", function () {
    const domain = "somedomain.com.pl";
    const expectedValidity = true;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain name with one character before dot is valid", function () {
    const domain = "3.com";
    const expectedValidity = true;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("IP address is valid", function () {
    const domain = "66.171.248.170";
    const expectedValidity = true;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain ending with dash is NOT valid", function () {
    const domain = "somedomain-.com";
    const expectedValidity = false;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain starting with dash is NOT valid", function () {
    const domain = "-somedomain.com";
    const expectedValidity = false;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain starting and ending with dash is NOT valid", function () {
    const domain = "-somedomain-.com";
    const expectedValidity = false;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain where the extension starts with dash is NOT valid", function () {
    const domain = "somedomain.-com";
    const expectedValidity = false;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });

  test("Domain where the extension ends with dash is NOT valid", function () {
    const domain = "somedomain.com-";
    const expectedValidity = false;

    const validity = isDomainValid(domain);

    expect(validity).toBe(expectedValidity);
  });
});
