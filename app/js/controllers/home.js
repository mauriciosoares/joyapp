app.controller('HomeCtrl', ['$scope', function($scope) {

	$scope.expenses = [{
		name: 'Circo',
		cost: 250
	},
	{
		name: 'Conta de Luz',
		cost: 80
	},
	{
		name: 'Pagar Mão',
		cost: 500
	},
	{
		name: 'Carro',
		cost: 1200
	}];
}]);