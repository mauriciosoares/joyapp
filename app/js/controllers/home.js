app.controller('HomeCtrl', ['$scope', 'localStorage', 'months', function($scope, localStorage, months) {
	$scope.expenses = localStorage.get('expenses');

	var month = new Date($scope.getCurrentMonth());
	$scope.month = {
		month: months.name[month.getMonth()],
		year: month.getFullYear()
	};

	$scope.delete = function(expense) {
		$scope.expenses.splice($scope.expenses.indexOf(expense), 1);
		localStorage.set('expenses', $scope.expenses);
	};
}]);