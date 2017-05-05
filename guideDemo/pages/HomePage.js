var demoCommands = {
    seachProduct: function(client, query) {
        return this .waitForElementPresent('@textBoxSearch', timeout)
                    .setValue('@textBoxSearch',query)
                    .sendKeys('@textBoxSearch',client.Keys.ENTER);
    }
};

var timeout = 20000;

module.exports = {

    commands: [demoCommands],

    elements: {
        mlPage: {
            selector: '[href="//www.mercadolibre.com.ar/"]'
        },
        textBoxSearch: {
            selector: '.nav-search-input'
        }
    }
};
