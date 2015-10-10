
define(
	"views/user/list",
	["collections/employees", 'text!/templates/list.html', 'text!/templates/users/list.html', 'handlebars'],

	function (Employees, template, listTemplate, Handlebars) {
		var MainListView = Backbone.View.extend({
			el: '.content',
			template: Handlebars.compile(template),
			listTemplate: Handlebars.compile(listTemplate),

			events: {
				'click button.add-record': 'addItem',
				'keyup .filter-surname': 'filterBySurname',
				'click .delete-record': 'deleteRecord'
			},

			initialize: function(){
				var self = this;
				this.isLoading = false;
				this.employees = new Employees();

				$(window).scroll(this.checkScroll.bind(this));

				this.render();
			},

			render: function(){
				this.$el.html(this.template());
				this.loadResults();
			},

			addItem: function() {
				Backbone.history.navigate("#/user/edit/new");
			},

			checkScroll: function () {
				if( !this.isLoading && $(window).scrollTop() != 0 && $(window).scrollTop() == ($(document).height() - $(window).height()) && this.employees.hasMoreItems()) {
					this.employees.page += 1; // Load next page
					this.loadResults();
				}
			},

			loadResults: function () {
				var self = this;

				this.isLoading = true;

				this.employees.fetch({
					success: function (response) {
						var container = self.$el.find('.users-table tbody');
						container.append(self.listTemplate({
							employees: self.employees.toJSON()
						}));

						self.isLoading = false;
					}
				});
			},

			filterBySurname: function(event) {
				var el = $(event.currentTarget);

				this.$el.find('.users-table tbody').html('');
				this.employees.surname = el.val();
				this.employees.page = 1;

				this.loadResults();
			},

			deleteRecord: function(event) {
				var id = $(event.currentTarget).data('id');

				var model = new this.employees.model({ id: id });
				model.destroy({
					success: function() {
						console.log(1);
					}
				});
			}
		});

		return MainListView;
	}
);
