define(
	"Emploees",
	["Employee"],

	function (Employee) {
		var Emploees = Backbone.Collection.extend({
			model: Emploee,
			url: '/api/users'
		});
	}
);
