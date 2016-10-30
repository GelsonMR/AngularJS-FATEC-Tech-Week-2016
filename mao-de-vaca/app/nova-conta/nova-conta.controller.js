angular.module('maoDeVaca')
.controller('NovaContaController', ['$scope', 'CATEGORIAS', 'mvContas', '$state', function($scope, CATEGORIAS, mvContas, $state){
	$scope.info = {};
	$scope.categorias = CATEGORIAS;
	$scope.confirmarConta = function(conta){
		console.log('dikasjidjasidjsa')
		mvContas.push(conta);
		$state.go('app.contas');
	}
}]);