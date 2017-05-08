function searchTvLedDesktop(client, query){
    var itemTitleSearch;
    var itemPriceSearch;
    client
        .page.HomePage()
        .assert.elementPresent('@mlPage')
        .seachProduct(client, query)
    client
        .page.SearchPage()
        .chooseCategory4K()
        .assert.containsText('@filters','TV 4K')    
        .clickColumnView()
    client.getText(client.page.SearchPage().elements.itemTitle.selector, function(result){itemTitleSearch = result.value});
    client.getText(client.page.SearchPage().elements.itemPrice.selector, function(result){itemPriceSearch = result.value});
    client
        .page.SearchPage()
        .assert.urlContains('DisplayType_G')
        .clickFirstElementList();
    client
        .page.VipPage()
    client.getText(client.page.VipPage().elements.itemTitle.selector, function(result){
        console.log('Valor de la VIP: ' + result.value)
            this.assert.equal(result.value,itemTitleSearch);
         }),
    client.getText(client.page.VipPage().elements.itemPrice.selector, function(result){
            console.log('Valor de la VIP: ' + result.value)
            this.assert.equal(result.value,itemPriceSearch);
         });
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

        searchTvLedDesktop(client, "Tv led hd")

    }
};
