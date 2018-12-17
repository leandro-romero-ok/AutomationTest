module.exports = {

    'Update description': function (client) {
        var stensul = client.page.DemoPage();
    
        stensul.navigate()
          .assert.title('Stranger List')
          .waitForElementPresent('@editButton')
          .click('@editButton')
          .waitForElementPresent('@textAreaEdit')
          .setValue('@textAreaEdit','TestStensul')
          .click('@updateButton')
          .assert.containsText('@textDescription', 'TestStensul')
        client.end();
      },
    'View Code on Github': function (client) {
        var stensul = client.page.DemoPage();
    
        stensul.navigate()
          .assert.title('Stranger List')
          .waitForElementPresent('@githubLink')
          .click('@githubLink')
          .assert.urlContains('http://immense-hollows-74271.herokuapp.com/')
        client.end();
      },
      'Delete item intention': function (client) {
        var stensul = client.page.DemoPage();
    
        stensul.navigate()
          .assert.title('Stranger List')
          .waitForElementPresent('@deleteItem')
          .click('@deleteItem')
          .assert.containsText('@deleteWarningText', '¿Are you shure you want to delete this item?')
        client.end();
      }

};
