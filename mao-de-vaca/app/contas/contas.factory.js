(function() {
	'use strict';

	angular
		.module('maoDeVaca')
		.factory('mvContas', mvContas);

	mvContas.$inject = [];

	function mvContas() {
		var service = [
			{
				cor: '#00BCD4',
				descricao: 'Água',
				valor: 60.15,
				categoria: 'Doméstico',
				pago: false
			},{
				cor: '#FFC107',
				descricao: 'Luz',
				valor: 100.90,
				categoria: 'Doméstico',
				pago: false
			},{
				cor: '#4CAF50',
				descricao: 'Gás',
				valor: 85.70,
				categoria: 'Doméstico',
				pago: false
			},{
				cor: '#F44336',
				descricao: 'Gasolina',
				valor: 120,
				categoria: 'Doméstico',
				pago: false
			}
		];
		
		return service;
	}
})();