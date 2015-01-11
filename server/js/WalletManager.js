"use strict";
app.controller("Wallet", ['Blockchaininfo', '$scope', '$rootScope', function(Blockchaininfo, $scope, $rootScope) {
	$scope.address= "18Y5ejh7PXQSgBUXLQe5fJ3KuN5Rt9tDxf";

	var blockchaininfo = Blockchaininfo.resource;
	//console.log(blockchaininfo)
	/*Blockchaininfo.$promise().then(function() {
		console.log("this works");
	});*/

	var result = blockchaininfo.multiAddr({addresses:"1LuckyB5VGzdZLZSBZvw8DR17iiFCpST7L"}).$promise.then(function(result) {
		console.log(result);
	});
	//});
	//console.log(result);

	$scope.generateAddress = function () {
		var privateKey = new bitcore.PrivateKey();
		$scope.address = privateKey.toAddress().toString();
	}

	$scope.sign = function() {

	}

	$scope.fetchutxos = function() {

	}

	$scope.broadcastTransaction = function() {

	}


}]);