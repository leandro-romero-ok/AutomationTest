var args = require('minimist')(process.argv),
    site = args["site"] || "mla";
    environment = args["e"] || "xvfb_desktop";
var nwjsrep = require('nwjs-reporter');
module.exports = {
    before : function(done) {
        nwjsrep.init();
        done();
    },
    reporter : function(results, done) {
        nwjsrep.generateJsonReports(results,done);
    },
    after : function(done) {
        nwjsrep.summarizeAndPrintResults(done);
    },

    'site': site,
    'environment': environment,
    'waitForConditionPollInterval': 50,
    'waitForConditionTimeout':5000,
    'retryAssertionTimeout': 10000,
    'screenshots': './screenshots/',
    "mla" : {
        'URL': {'description': 'My URL', 'url': 'http://www.mercadolibre.com.ar/'}
    }

};
