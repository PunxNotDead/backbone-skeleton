
define(
	"views/user/list",
	["collections/employees", 'text!/templates/list.html', 'handlebars'],

	function (Employees, template, Handlebars) {
		var employees = new Employees();

		var MainListView = Backbone.View.extend({
			el: '.content',
			template: Handlebars.compile(template),
			events: {
				"click button.add-record": "addItem",
			},
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
			},

			addItem: function() {
				Backbone.history.navigate("#/user/edit/new");
			}
		});

		return MainListView;
	}
);
