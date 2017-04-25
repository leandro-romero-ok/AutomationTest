
function searchInMercadoLibre(client, query){
    var selector = client.page.SearchPage().getSelector(client);
    client
        .page.HomePage()
        .assert.elementPresent('@mlPage')
        .seachInMercadoLibre(client)
    client
        .page.SearchPage()
        .assert.elementPresent(selector)
        .assert.containsText(selector, query);
}

module.exports = {

    site: "",
    '@tags': ['demo'],

    before: function(client) {
        site    = client.globals.site;
        siteUrl = client.globals[site];
    },
    beforeEach: function(client) {
        client.url(siteUrl.URL.url);
    },
     after: function(client) {
      client.end();
    },

    'Should search in mercadolibre an Iphone 7 Plus': function (client) {

        searchInMercadoLibre(client, "iPhone 7 Plus")

    }
};
