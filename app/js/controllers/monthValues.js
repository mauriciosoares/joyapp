app.controller('MonthValuesCtrl', ['$scope', 'localStorage', function ($scope, localStorage) {
	var expenses = localStorage.get('expenses');
	var paid = localStorage.get('paid');

	$scope.getValues = function(value) {
		var valueToReturn = 0;
		if(expenses) {
			switch(value) {
				case 'paid':
					angular.forEach(expenses, function(e){
						if(angular.isArray(paid[$scope.month.time])) {
							if(paid[$scope.month.time].indexOf(e.id) >= 0) {
								valueToReturn += parseInt(e.value);
							}
						}
					});
					return valueToReturn;

				case 'not-paid':
					angular.forEach(expenses, function(e){
						if(angular.isArray(paid[$scope.month.time])) {
							if(paid[$scope.month.time].indexOf(e.id) < 0) {
								valueToReturn += parseInt(e.value);
							}
						} else {
							valueToReturn += parseInt(e.value);
						}
					});
					return valueToReturn;

				case 'total':
					angular.forEach(expenses, function(e){
						valueToReturn += parseInt(e.value);
					});
					return valueToReturn;
			}
		} else {
			return 0;
		}
	};
}]);