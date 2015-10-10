define(
	'models/employee',
	[],

	function () {
		var Employee = Backbone.Model.extend({
			urlRoot: "api/user",

			defaults:{
				name: '',
				surname: '',
				salary: 0
			}
		});

		return Employee;
	}
);
