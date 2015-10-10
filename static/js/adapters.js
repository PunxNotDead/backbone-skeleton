define(
	'adapters',
	['rivets'],

	function (Rivets) {
		Rivets.adapters[':'] = {
			observe: function (obj, keypath, callback) {
				if (obj instanceof Backbone.Collection) {
					obj.on('add remove reset', callback);
				}
				else if (obj instanceof Backbone.Model) {
					obj.on('change:' + keypath, callback);
				}
				else {
					throw new Error('Rivets error: not backbone model or collection');
				}
			},
			unobserve: function (obj, keypath, callback) {
				if (obj instanceof Backbone.Collection) {
					obj.off('add remove reset', callback);
				}
				else if (obj instanceof Backbone.Model) {
					obj.off('change:' + keypath, callback);
				}
				else {
					throw new Error('Rivets error: not backbone model or collection');
				}
			},
			get: function (obj, keypath) {
				if( obj instanceof Backbone.Collection){
					return obj.models
				}
				else if(obj instanceof Backbone.Model){
					return obj.get(keypath);
				}
				else{
					throw new Error('Rivets error: not backbone model or collection');
				}
			},
			set: function (obj, keypath, value) {
				obj.set(keypath, value);
			}
		};
	}
);
