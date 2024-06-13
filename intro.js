const puppeteer = require("puppeteer");

let page; // current page

const browserOpenpromise = puppeteer.launch({
    headless: false, // for browser to visible when open    
    slowMo: true, // slow down the process
    defaultViewport: null, // for full screen mode
    args: ["--start-maximized"] // to disable notifications
}); // puppetter runs headless browser
browserOpenpromise
    .then(function (browser) {  // javascript promise
        const pagesArrpromise = browser.pages(); // currently opened tabs
        return pagesArrpromise;
    }).then(function (browserPages) { // atched to pageArrpromise
        page = browserPages[0];  // assigned page 0 (tab 0) to current page
        let gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function () {
        // waiting for element to appear on the page
        let elementWaitPromise = page.waitForSelector("textarea.gLFyf", { visible: true });
        return elementWaitPromise;
    }).then(function () {
        // type any element on that page -> selector
        let keysWillBeSendPromise = page.type("textarea.gLFyf", "puppeteer");
        return keysWillBeSendPromise;
    }).then(function () {
        // page.keyboard to type special characters
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function () {
        let elementWaitpromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
        return elementWaitpromise;
    }).then(function () {
        // mouse -> click on link 
        let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
        return keysWillBeSendPromise;
    }).catch(function (err) {
        console.log(err);
    })