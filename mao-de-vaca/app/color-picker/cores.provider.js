(function () {
	'use strict';

	angular
		.module('maoDeVaca')
		.provider('mvCores', hrSnack);

	hrSnack.$inject = [];

	function hrSnack() {
		var provider = {
			adicionarCor: adicionarCor,
			$get: get
		},
			cores = [
				'#000000',
				'#FFFFFF',
				'#F44336',
				'#E91E63',
				'#9C27B0',
				'#673AB7',
				'#3F51B5',
				'#2196F3',
				'#03A9F4',
				'#00BCD4',
				'#009688',
				'#4CAF50',
				'#8BC34A',
				'#CDDC39',
				'#FFEB3B',
				'#FFC107',
				'#FF9800',
				'#FF5722',
				'#795548',
				'#9E9E9E',
				'#607D8B',
			];

		return provider;

		////////////////

		function adicionarCor(cor) {
			cores.push(cor);
		}

		function get() {
			var service = {
				lista: cores
			};

			return service;
		}
	}
})();