define(
	'models/employee',
	[],

	function () {
		var Employee = Backbone.Model.extend({
			url: "api/user"
		});

		return Employee;
	}
);
