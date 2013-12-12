app.controller('AddExpenseCtrl', ['$scope', 'localStorage', function ($scope, localStorage) {
	$scope.expense = {};

	$scope.save = function() {
		if(!$scope.expense.name || !$scope.expense.value) {
			alert('Preencha os 2 campos');
			return;
		}

		if(!angular.isNumber($scope.expense.value)) {
			alert('Coloque somente números');
			return;
		}

		var expenses = localStorage.get('expenses');

		if(!angular.isArray(expenses)) {
			expenses = [];
		}

		$scope.expense.id = new Date().getTime();

		expenses.push($scope.expense);
		localStorage.set('expenses', expenses);

		$scope.expense = {};
	};
}]);