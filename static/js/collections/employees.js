define(
	"collections/employees",
	["models/employee"],

	function (Employee) {
		var Employees = Backbone.Collection.extend({
			model: Employee,
			page: 1,
			size: 25,
			surname: '',

			url: function () {
				return '/api/users?surname=' + this.surname + '&page=' + this.page + '&size=' + this.size
			},

			hasMoreItems: function() {
				return this.length === this.size;
			}
		});

		return Employees;
	}
);
