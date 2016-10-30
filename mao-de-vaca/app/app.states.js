(function() {
	'use strict';

	angular
		.module('maoDeVaca')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		
        $stateProvider
			.state('app', {
				abstract: true,
				templateUrl: 'app/app.html',
				controller: 'AppController'
			})
            .state('app.contas', {
                url: '',
                templateUrl: 'app/contas/contas.html',
                controller: 'ContasController'
            })
            .state('app.novaConta', {
                url: '/novaConta',
                templateUrl: 'app/nova-conta/nova-conta.html',
                controller: 'NovaContaController'
            })
	}
})();