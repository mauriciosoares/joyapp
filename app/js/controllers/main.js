app.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$window', 'months', 'localStorage', function($scope, $rootScope, $location, $window, months, localStorage) {
	$scope.slide = '';

	// initial config for localstorage
	if(!angular.isObject(localStorage.get('paid'))) {
		localStorage.set('paid', {});
	}
	if(!angular.isObject(localStorage.get('expenses'))) {
		localStorage.set('expenses', []);
	}

	var monthHelper = new Date();
	monthHelper = new Date(monthHelper.getFullYear(), monthHelper.getMonth());

	$scope.month = {
		month: months.name[monthHelper.getMonth()],
		year: monthHelper.getFullYear(),
		time: monthHelper.getTime()
	};

	$rootScope.nextMonth = function() {
		if (monthHelper.getMonth() === 11) {
			monthHelper = new Date(monthHelper.getFullYear() + 1, 0, 1);
		} else {
			monthHelper = new Date(monthHelper.getFullYear(), monthHelper.getMonth() + 1, 1);
		}

		$scope.month = {
			month: months.name[monthHelper.getMonth()],
			year: monthHelper.getFullYear(),
			time: monthHelper.getTime()
		};
	};

	$rootScope.prevMonth = function() {
		if (monthHelper.getMonth() === 0) {
			monthHelper = new Date(monthHelper.getFullYear() - 1, 11, 1);
		} else {
			monthHelper = new Date(monthHelper.getFullYear(), monthHelper.getMonth() - 1, 1);
		}

		$scope.month = {
			month: months.name[monthHelper.getMonth()],
			year: monthHelper.getFullYear(),
			time: monthHelper.getTime()
		};
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