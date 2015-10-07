
define(
	"views/main",
	["collections/employees", 'text!/templates/list.html', 'handlebars'],

	function (Employees, template, Handlebars) {
		var employees = new Employees();

		var AppView = Backbone.View.extend({
			el: '#container',
			template: Handlebars.compile(template),
			initialize: function(){
				var self = this;

				employees.fetch({
					success: function(data) {
						self.render();
					}
				});
			},

			render: function(){
				this.$el.html(this.template({
					employees: employees.toJSON()
				}));
			}
		});

		return AppView;
	}
);
