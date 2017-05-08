var timeout = 20000;
var demoCommands = {
    getSelector: function(client) {
        if(client.globals.environment === 'xvfb_mobile')
            return this.elements.searchResult.selector;
        else
            return this.elements.filters.selector;
    },
    chooseCategory4K: function(client) {
        return this .waitForElementPresent('@category4K', timeout)
                    .click('@category4K')
    },
    clickColumnView: function(client) {
        return this .waitForElementPresent('@columnView', timeout)
                    .click('@columnView')
    },
    clickFirstElementList: function(client) {
        return this .waitForElementPresent('@firstProduct', timeout)
                    .click('@firstProduct')
    }
};
module.exports = {

    commands: [demoCommands],

    elements: {
        searchResult: {
            selector: '.nav-search-input'
        },
        filters: {
            selector: '.applied-fliter'
        },
        category4K: {
            selector: '[href="http://televisores.mercadolibre.com.ar/televisores/tv-4k/tv-led-hd"]'
        },
        columnView: {
            selector: '[href="http://televisores.mercadolibre.com.ar/televisores/tv-4k/tv-led-hd_DisplayType_G"]'
        },
        firstProduct: {
            selector: '.article:nth-of-type(1)'
        },
        itemTitle: {
            selector: '.list-view-item-title:nth-of-type(1)'
        },
        itemPrice: {
            selector: '.ch-price:nth-of-type(1)'
        }
    }
};