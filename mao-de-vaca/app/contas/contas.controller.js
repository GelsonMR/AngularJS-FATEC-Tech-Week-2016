angular
.module('maoDeVaca')
.controller('ContasController', ['$scope', 'CATEGORIAS', 'mvCores', 'mvContas', function($scope, CATEGORIAS, mvCores, mvContas) {
	$scope.app = 'Mão de vaca';
	$scope.autor = 'Gelson';
	$scope.categorias = CATEGORIAS;
	$scope.cores = mvCores.lista;
	$scope.contas = mvContas;
	$scope.adicionarConta = function(conta) {
		$scope.contas.push(conta);
	}
	$scope.removerConta = function(indice) {
		$scope.contas.splice(indice, 1);
	}
	$scope.valorTotalContas = function(contas) {
		var total = 0;
		for (var i = 0; i < contas.length; i++) {
			total += !contas[i].pago ? contas[i].valor : 0;
		}
		return total;
	}
}]);