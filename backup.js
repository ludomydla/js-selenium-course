const { Builder, By, Key, until } = require("selenium-webdriver");

(async function() {
  var driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.python.org/");

    var searchField = await driver.findElement(By.id("id-search-field"));
    await searchField.sendKeys("print");

    var goButton = await driver.findElement(By.id("submit"));
    goButton.click();

    await driver.wait(
      until.elementLocated(By.className("list-recent-events")),
      10000
    );
    var resultList = await driver.findElements(
      By.css("#content ul.list-recent-events > li")
    );

    if (resultList.length <= 0) {
      console.log("Nieco sa pokazilo. NEFGUNGUJEM");
    } else {
      console.log("Vsetko OK, nasli sme " + resultList.length + " vysledkov");
    }
  } finally {
    await driver.quit();
  }
})();

(async () => {
  var driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.python.org/accounts/login/");

    var loginField = await driver.findElement(By.id("id_login"));
    await loginField.sendKeys("user");

    var pwdField = await driver.findElement(By.id("id_password"));
    await pwdField.sendKeys("nbusr123");

    var signInButton = await driver.findElement(By.className("primaryAction"));
    await signInButton.click();

    var errorMsg = await driver.findElement(
      By.css("ul.errorlist.nonfield li:first-child")
    );
    var text = await errorMsg.getText();

    if (text == "The username and/or password you specified are not correct.") {
      console.log("Uspech, nenalogovali sme sa");
    } else {
      console.log("Fail, odmietnutie loginu nenastalo");
    }
  } finally {
    await driver.quit();
  }
})();
