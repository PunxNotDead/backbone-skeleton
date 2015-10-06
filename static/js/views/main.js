
define(
	"views/main",
	["collections/employees"],

	function (Employees) {
		var emploees = new Employees();

		var AppView = Backbone.View.extend({
			el: '#container',

			initialize: function(){
				var self = this;

				emploees.fetch({
					success: function() {
						self.render();
					}
				});
			},

			render: function(){
				this.$el.html(emploees.models);
			}
		});

		return AppView;
	}
);
