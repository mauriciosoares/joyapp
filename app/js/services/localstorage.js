app.factory('localStorage', [function () {

	var set = function(field, data) {
		return localStorage.setItem(field, angular.toJson(data));
	};

	var get = function(field) {
		return angular.fromJson(localStorage.getItem(field));
	};

	return {
		set: set,
		get: get
	};
}]);