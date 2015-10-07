define(
	"collections/employees",
	["models/employee"],

	function (Employee) {
		var Employees = Backbone.Collection.extend({
			model: Employee,
			url: '/api/users'
		});

		return Employees;
	}
);
