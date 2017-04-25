var timeout = 20000;
var demoCommands = {
    getSelector: function(client) {
        if(client.globals.environment === 'xvfb_mobile')
            return this.elements.searchResult.selector;
        else
            return this.elements.filters.selector;
    }
};
module.exports = {

    commands: [demoCommands],

    elements: {
        searchResult: {
            selector: '.ch-icon-remove'
        },
        filters: {
            selector: '.applied-fliter'
        }
    }
};