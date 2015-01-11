"use strict";
app.controller("HomeController",[ '$rootScope', '$scope', '$location' ,function($rootScope, $scope, $location){

var Gigs = Parse.Object.extend("Gigs");
var gig = new Gigs();
 var query = new Parse.Query(Gigs);




$scope.addToTable = function(currency, description, txHash, status) {
	$scope.transactions.push({'Currency':currency, 'Description': description, 'TxHash':txHash, 'Status': status });
	console.log($scope.transactions);
}


$scope.transactions = [];
//setTimeout(function() {
$scope.transactions = query.find().then(function(results) {
	var holder = [];
 // Do something with the returned Parse.Object values
	for (var i = 0; i < results.length; i++) { 
	  var object = results[i];
	  holder.push({'Currency':object.get('currency'), 'Description':object.get('Description'), 'TxHash': object.get('txHash'), 'Status': object.get('status')});    
	}
	console.log(holder[0]);
	$scope.transactions = holder;
	$scope.$apply();
	return holder;
	 //console.log(holder);
});

console.log($scope.transactions);

$scope.addRow = function(){		
	$scope.transactions.push({ 'Currency':$scope.Currency, 'Description': $scope.Description, 'TxHash':$scope.txHash, 'Status': $scope.status });
	$scope.Currency='';
	$scope.Description='';
	$scope.txHash='';
	$scope.status = '';
};


}]);
