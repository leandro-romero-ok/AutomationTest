function searchTvLedDesktop(client, query, itemTitle, itemPrice){
    client
        .page.HomePage()
        .assert.elementPresent('@mlPage')
        .seachProduct(client, query)
    client
        .page.SearchPage()
        .chooseCategory4K()
        .assert.containsText('@filters','TV 4K')    
        .clickColumnView()
        .assert.urlContains('DisplayType_G')
        .assert.containsText('@itemTitle', itemTitle)
        .assert.containsText('@itemPrice', itemPrice)
        .clickFirstElementList();
    client
        .page.VipPage()
        .assert.containsText('@itemTitle', itemTitle)
        .assert.containsText('@itemPrice', itemPrice);
}

module.exports = {

    site: "",
    '@tags': ['guideDemo'],

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

    'Should search in mercadolibre a Tv led hd and verify product name, price chosed in search page': function (client) {

        searchTvLedDesktop(client, "Tv led hd", 'Smart Tv Led Samsung Ju6000 40 4k Ultra Hd ( Netflix)', '$ 10.999')

    }
};
