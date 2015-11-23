var esUrl = 'namsek.info:9200';
var elasticsearch = require('elasticsearch');

var es = new elasticsearch.Client({
	host: esUrl,
});

es.ping({
	// ping usually has a 3000ms timeout 
	requestTimeout: 3000,

	// undocumented params are appended to the query string 
	hello: "elasticsearch!"
}, function(error) {
	if (error) {
		console.trace('elasticsearch cluster is down!');
	} else {
		console.log('All is well');
	}
});

module.exports = es;