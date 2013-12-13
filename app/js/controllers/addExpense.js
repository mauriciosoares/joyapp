app.controller('AddExpenseCtrl', ['$scope', 'localStorage', '$routeParams', function ($scope, localStorage, $routeParams) {
	$scope.expense = {};
	var update = 0;

	if($routeParams.id) {
		update = 1;
		$scope.message = 'Update your expense';
		$scope.button = 'Update';

		var expenses = localStorage.get('expenses');
		angular.forEach(expenses, function(value){
			if(value.id == $routeParams.id) {
				$scope.expense.name = value.name;
				$scope.expense.value = value.value;
			}
		});
	} else {
		$scope.message = 'Add your expense';
		$scope.button = 'Add';
	}

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

		if(update == 1) {
			angular.forEach(expenses, function(value){
				if(value.id == $routeParams.id) {
					value.name = $scope.expense.name;
					value.value = $scope.expense.value;
				}
			});

			localStorage.set('expenses', expenses);
			$scope.back('right');
			return;
		}

		if(!angular.isArray(expenses)) {
			expenses = [];
		}

		$scope.expense.id = new Date().getTime();

		expenses.push($scope.expense);
		localStorage.set('expenses', expenses);

		$scope.expense = {};
		$scope.back('right');
	};
}]);