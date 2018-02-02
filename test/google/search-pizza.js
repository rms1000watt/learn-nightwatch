var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Search for Pizza on Google': function (browser) {
    browser
      .url('http://www.google.com/')
      .waitForElementVisible('body')
      .assert.title("Google")
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', ["Laventina's Big Cheese Pizza", browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText("#rso > div > div > div:nth-child(1) > div > div > h3 > a","Laventina's Big Cheese Pizza | Voted Best Pizza in Newport Beach")
      .end();
    }
  };
