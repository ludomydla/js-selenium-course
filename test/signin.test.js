const SigninPage = require("../models/signin_page");

describe("Python sign-in page", function () {
  this.timeout(60000);
  var signin;

  beforeEach(async function () {
    signin = new SigninPage();
    await signin.init();
  });

  afterEach(async function () {
    signin.quit();
  });

  it("Should show error msg after wrong login data", async function () {
    await signin.doUnsuccessfulSignin();
  });

});

