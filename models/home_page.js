const assert = require("assert");
const BasePage = require("./base_page");
const CSS = require("../enums/enum_css_selectors");



BasePage.prototype.doSearchAndCheckResults = async function () {
    await this.goTo("https://www.python.org/");

    var searchField = await this.findByCss(CSS.ID_SEARCH_FIELD);
    await searchField.sendKeys("print");

    var goButton = await this.findByCss(CSS.ID_SUBMIT);
    goButton.click();

    // tento wait tu nemusi byt, keby sme predhcadzajuci
    // 'click()' spravili s 'await'
    // robili sme si to len na ukazku
    await this.waitForElementLocated(CSS.LIST_RECENT_EVENTS);

    var resultList = await this.findAllByCss(CSS.RESULTS_LIST);

    assert(resultList.length);
};

module.exports = BasePage;