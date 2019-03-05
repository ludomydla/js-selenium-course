const assert = require("assert");
const BasePage = require("./base_page");
const CSS = require("../enums/enum_css_selectors");


BasePage.prototype.doUnsuccessfulSignin = async function () {
    await this.driver.get("https://www.python.org/accounts/login/");

    // tu robim ovladanie browser este skratenejsie
    // nevytvaram si premennu reprezentujucu HTML element
    // ale priamo po najdeni elmentu - skrze resolve promisu (then)
    // na nom vykonam akciu pomocou arrow funkcie
    // niekde je potrebne aby aj callback arrow funkcia bola async/await
    // napriklad pri volani 'click()'
    await this.findByCss(CSS.ID_LOGIN).then((el) => { el.sendKeys("testuser") });

    await this.findByCss(CSS.ID_PASSWORD).then((el) => { el.sendKeys("nbusr123") });

    await this.findByCss(CSS.LOGIN_BUTTON).then(async (el) => { await el.click() });

    var text = await this.findByCss(CSS.LOGIN_ERROR_FIELD).then((el) => { return el.getText() });

    assert.equal(text, "The username and/or password you specified are not correct.");
};

module.exports = BasePage;