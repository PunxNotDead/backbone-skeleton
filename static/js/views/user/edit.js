
define(
	"views/user/edit",
	["models/employee", 'text!/templates/edit.html', 'handlebars', 'rivets'],

	function (Employee, template, Handlebars, Rivets) {
		var EditView = Backbone.View.extend({
			el: '.content',
			template: Handlebars.compile(template),
			events: {
				'click button.save-record': 'saveRecord'
			},
			model: null,

			initialize: function(options){
				var id = parseInt(options.param);
				var self = this;

				if (!isNaN(id)) {
					this.model = new Employee({ id: id });

					this.model.fetch({
						success: function() {
							self.render();
						}
					})
				} else {
					this.model = new Employee();

					this.render();
				}
			},

			render: function(){
				this.$el.html(this.template());

				Rivets.bind(this.$el, { model: this.model }, { view: this });
			},

			saveRecord: function() {
				var self = this;

				this.model.save(null, {
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
