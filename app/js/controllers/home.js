app.controller('HomeCtrl', ['$scope', 'localStorage',  function($scope, localStorage) {
	$scope.expenses = localStorage.get('expenses');

	$scope.delete = function(expense) {
		$scope.expenses.splice($scope.expenses.indexOf(expense), 1);
		localStorage.set('expenses', $scope.expenses);
	};

	$scope.getValues = function(value) {
		var valueToReturn = 0;
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