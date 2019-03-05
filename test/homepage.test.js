const Homepage = require("../models/home_page");

describe("Python homepage", function () {
  this.timeout(60000);
  var homepage;

  beforeEach(async function () {
    homepage = new Homepage();
    await homepage.init();
  });

  afterEach(async function () {
    homepage.quit();
  });

  it("Should return some results after reasonable search", async function () {
    await homepage.doSearchAndCheckResults();
  });

});

