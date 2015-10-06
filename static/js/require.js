requirejs.config({
	baseUrl: 'js',
	urlArgs: 'timestamp=' + (new Date()).getTime(),
	waitSeconds: 0,

	paths: {
		jquery: 'vendor/jquery-2.1.4.min',
		underscore: 'vendor/underscore-min',
		backbone: 'vendor/backbone-min',
		app: 'main'
	},

	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		underscore: {
			exports: '_'
		},
		app: {
			deps: ['backbone']
		}
	}
});

requirejs(['app'], function(util) {
	console.log(util);
});
