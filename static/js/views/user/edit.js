
define(
	"views/user/edit",
	["models/employee", 'text!/templates/edit.html', 'handlebars'],

	function (Employee, template, Handlebars) {
		var EditView = Backbone.View.extend({
			el: '.content',
			template: Handlebars.compile(template),
			events: {
				'click button.save-record': 'saveRecord'
			},
			initialize: function(options){
				this.render();
			},

			render: function(){
				this.$el.html(this.template());
			},

			saveRecord: function() {
				var self = this;
				var employee = new Employee();

				employee.set({
					name: $('.employee-name').val(),
					surname: $('.employee-surname').val(),
					salary: $('.employee-salary').val()
				});

				employee.save(null, {
					success: function(model, response) {
						if (response.error) {
							self.$el.find('.error').html('Cant save model');
						} else {
							Backbone.history.navigate("#/user/list");
						}
					},
					error: function(data) {
					}
				});
			}
		});

		return EditView;
	}
);
