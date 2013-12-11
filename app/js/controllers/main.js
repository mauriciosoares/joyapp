app.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$window', function($scope, $rootScope, $location, $window) {
	$scope.slide = '';

	var month = new Date();

	$rootScope.getCurrentMonth = function() {
		return month.getTime();
	};

	$rootScope.nextMonth = function() {
		if (month.getMonth() === 11) {
			month = new Date(month.getFullYear() + 1, 0, 1);
		} else {
			month = new Date(month.getFullYear(), month.getMonth() + 1, 1);
		}
		return month.getTime();
	};

	$rootScope.prevMonth = function() {
		if (month.getMonth() === 0) {
			month = new Date(month.getFullYear() - 1, 11, 1);
		} else {
			month = new Date(month.getFullYear(), month.getMonth() - 1, 1);
		}
		return month.getTime();
	};


	$rootScope.back = function(direction) {
		$scope.slide = 'slide-' + direction;
		$window.history.back();
	};

	$rootScope.go = function(path, direction){
		$scope.slide = 'slide-' + direction;
		$location.url(path);
	};
}]);