define(
	['backbone'],

	function (Backbone) {
		var AppRouter = Backbone.Router.extend({
			routes: {
				':page/:action': 'showPage',
				':page/:action/:param': 'showPage',
				'*actions': 'defaultRoute',
			},

			defaultRoute: function(page, action) {
				this.showPage('user', 'list');
			},

			showPage: function(page, action, param) {
				require(['views/' + page + '/' + action ], function(View) {
					var view = new View({ param: param });
				});
			}
		});

		var Router = new AppRouter();

		Backbone.history.start();
	}
);