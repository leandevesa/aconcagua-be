const puppeteer = require('puppeteer');

module.exports = {
    scrape: async function(brands) {

        console.log("Scraping begin");


        const browser = await puppeteer.launch();
    

        await browser.close();

        return "Products updated ok!";
    }
};

async function updateProducts(executionId, brands) {

}