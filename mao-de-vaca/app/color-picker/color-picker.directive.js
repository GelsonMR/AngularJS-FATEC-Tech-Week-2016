(function() {
	'use strict';

	angular
		.module('maoDeVaca')
		.directive('mvColorPicker', colorPicker);

	colorPicker.$inject = ['mvCores'];

	function colorPicker(mvCores) {
		var directive = {
			link: link,
			restrict: 'E',
			templateUrl: 'app/color-picker/color-picker.directive.html',
			scope: {
				'ngModel': '='
			}
		};
		return directive;
		
		function link(scope, element, attrs) {
			scope.cores = mvCores.lista;
			scope.selecionarCor = function(cor) {
				scope.ngModel = cor;
				scope.mostrarCores = false;
			}
		}
	}
})();