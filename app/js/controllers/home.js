app.controller('HomeCtrl', ['$scope', 'localStorage', '$timeout', function($scope, localStorage, $timeout) {
	$scope.expenses = localStorage.get('expenses');

	$scope.$watch('month', function(e) {
		// console.log(e);
	});

	$scope.checked = function(id) {
		var paid = localStorage.get('paid');

		if (!paid) {
			return false;
		}

		if(!angular.isArray(paid[$scope.month.time])) {
			return false;
		}

		if(paid[$scope.month.time].indexOf(id) >= 0) {
			return true;
		} else {
			return false;
		}
	};

	$scope.check = function(expense) {
		var paid = localStorage.get('paid');

		if(!angular.isArray(paid[$scope.month.time])) {
			paid[$scope.month.time] = [];
		}

		if(paid[$scope.month.time].indexOf(expense.id) < 0) {
			paid[$scope.month.time].push(expense.id);
		} else {
			paid[$scope.month.time].splice(paid[$scope.month.time].indexOf(expense.id), 1);
		}

		localStorage.set('paid', paid);
	};

	$scope.delete = function(expense) {
		$scope.expenses.splice($scope.expenses.indexOf(expense), 1);
		localStorage.set('expenses', $scope.expenses);
	};
}]);