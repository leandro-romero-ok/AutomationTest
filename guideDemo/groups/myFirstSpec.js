function searchTvLedDesktop(client, query){
    
}

module.exports = {

    site: "",
    '@tags': [''],

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

};
