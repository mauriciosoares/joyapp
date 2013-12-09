'use strict';

var app = angular.module('joyapp', [
	'ngTouch',
	'ngRoute',
	'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/add-expense', {templateUrl: 'partials/add-expense.html', controller: 'AddExpenseCtrl'});
}]);