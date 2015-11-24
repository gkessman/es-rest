require.config({
	baseUrl: '/js',
	paths: {
		jquery: 'bower_components/jquery/dist/jquery.min',
		backbone: 'bower_components/backbone/backbone-min',
		underscore: 'bower_components/underscore/underscore-min',
		handlebars: 'bower_components/handlebars/handlebars.min',
		text: 'bower_components/text/text',
		templates: '../templates'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

require(['init']);