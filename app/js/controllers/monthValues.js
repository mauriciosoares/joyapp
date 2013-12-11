app.controller('MonthValuesCtrl', ['$scope', function ($scope) {
	$scope.getValues = function(value) {
		var valueToReturn = 0;
		return valueToReturn;
		if($scope.expenses.length) {
			switch(value) {
				case 'paid':
					angular.forEach($scope.expenses, function(e){
						valueToReturn += e.value;
					});
					return valueToReturn;
				case 'not-paid':
					angular.forEach($scope.expenses, function(e){
						valueToReturn += e.value;
					});
					return valueToReturn;
				case 'total':
					angular.forEach($scope.expenses, function(e){
						valueToReturn += e.value;
					});
					return valueToReturn;
			}
		} else {
			return 0;
		}
	};
}]);