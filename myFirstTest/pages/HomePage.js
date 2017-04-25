var demoCommands = {
    seachInMercadoLibre: function(client) {
        return this .waitForElementPresent('@textBoxSearch', timeout)
                    .setValue('@textBoxSearch','Iphone 7 Plus')
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
