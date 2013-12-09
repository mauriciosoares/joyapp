app.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$window', function($scope, $rootScope, $location, $window) {
	$scope.slide = '';

	$rootScope.back = function() {
		$scope.slide = 'slide-right';
		$window.history.back();
	};

	$rootScope.go = function(path){
		$scope.slide = 'slide-left';
		$location.url(path);
	};
}]);