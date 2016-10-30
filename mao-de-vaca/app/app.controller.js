(function() {
	'use strict';

	angular
		.module('maoDeVaca')
		.controller('AppController', ['$scope', function($scope) {
			$scope.app = 'Mão de vaca';
			$scope.autor = 'Gelson';
		}]);
})();