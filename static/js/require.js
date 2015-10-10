requirejs.config({
	baseUrl: 'js',
	urlArgs: 'timestamp=' + (new Date()).getTime(),
	waitSeconds: 0,

	paths: {
		jquery: 'vendor/jquery-2.1.4.min',
		underscore: 'vendor/underscore-min',
		backbone: 'vendor/backbone-min',
		text: 'vendor/text',
		handlebars: 'vendor/handlebars-v4.0.2',
		rivets: 'vendor/rivets.min',
		router: 'router',
		sightglass: 'vendor/sightglass'
	},

	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		underscore: {
			exports: '_'
		},
		rivets: {
			deps: ['sightglass']
		},
		router: {
			deps: ['backbone', 'text', 'handlebars', 'rivets']
		}
	}
});

requirejs(['router', 'adapters'], function(router) {

});
