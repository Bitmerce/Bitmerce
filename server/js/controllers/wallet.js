"use strict";
app.controller("Wallet", ['Blockchaininfo', '$scope', 'Database', '$rootScope', function(Blockchaininfo, $scope, Database, $rootScope) {
	$scope.address= "18Y5ejh7PXQSgBUXLQe5fJ3KuN5Rt9tDxf";

	var blockchaininfo = Blockchaininfo.resource;
	var Addresses = [];
	var PrivKeyChain = [];
	//update balance 
	setInterval(function(){
		var addressBalance = blockchaininfo.multiAddr({addresses:"1LuckyB5VGzdZLZSBZvw8DR17iiFCpST7L"});
		(addressBalance.wallet != undefined) ? ($scope.balance = addressBalance.wallet.final_balance) : ($scope.balance = "0");
	},1000)

	var result = blockchaininfo.multiAddr({addresses:"1LuckyB5VGzdZLZSBZvw8DR17iiFCpST7L"}).$promise.then(function(result) {
		console.log(result);
	});


	$scope.generateAddress = function () {
		var privateKey = new bitcore.PrivateKey();
		PrivKeyChain.push(privateKey);
		console.log(PrivKeyChain);
		$scope.address = privateKey.toAddress().toString();
	}

	$scope.recordToBlockchain = function(data) {
		var script = new Script();
		Script.buildDataOut(data);
	}


	$scope.fetchutxos = function(Addresses) {
		 var results = blockchaininfo.getUnspent({addresses: Addresses.join("|")})
		 var utxos = [];
		 for(var i=0 ;i<results.length; i++) {
		 	utxos.push(results[i].tx_output_n);
		 }

		return utxos;
	}

	$scope.createTransaction = function(utxos, address, amount) {
		var transaction = new Transaction()
	    .from(utxos)          // Feed information about what unspent outputs one can use
	    .to(address, amount)  // Add an output with the given amount of satoshis
	    .change(address)      // Sets up a change address where the rest of the funds will go
	    .sign(privkeySet)     // Signs all the inputs it can

	    return transaction; //transaction hash
	}

	$scope.pushToBlockchain = function(utxos, addresses, amount) {
		 blockchaininfo.pushTx(transaction);
	}

	$scope.connect = function() {
		var peer = new Peer('5.9.85.34');
		peer.connect();
	}


}]);