const { Builder, By, Key, until } = require("selenium-webdriver");

var BasePage = function () {

    this.driver = undefined;

    this.init = async function () {
        this.driver = await new Builder().forBrowser("chrome").build();
    }

    /**
     * Naloaduje stranku specifikovanu URLkou
     */
    this.goTo = async function (url) {
        await this.driver.get(url);
    }

    /**
     * Najde element podla jeho CSS selektora
     */
    this.findByCss = async function (css) {
        return await this.driver.findElement(By.css(css));
    }

    /**
     * Najde vsetky elementy podla ich CSS selektora
     */
    this.findAllByCss = async function (css) {
        return await this.driver.findElements(By.css(css));
    }

    /**
     * Caka na najdenie elementu podla css selektora
     * css - css selektor pre element
     * timeout - optional parameter na maximalnu dlzku cakania, default = 10000ms
     */
    this.waitForElementLocated = async function (css, timeout = 10000) {
        await this.driver.wait(
            until.elementLocated(By.css(css)),
            timeout
        );
    }

    /**
     * Zavrie okno browsera/ koniec testu
     */
    this.quit = async function () {
        this.driver.quit();
    }

}

module.exports = BasePage;