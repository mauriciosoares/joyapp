'use strict';

var app = angular.module('joyapp', [
	'ngTouch',
	'ngRoute',
	'ngAnimate'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/add-expense/:id?', {templateUrl: 'partials/add-expense.html', controller: 'AddExpenseCtrl'});
	$routeProvider.when('/month-values', {templateUrl: 'partials/month-values.html', controller: 'MonthValuesCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);