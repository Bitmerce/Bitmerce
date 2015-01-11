"use strict";
app.controller("HomeController",[ '$rootScope', '$scope', '$location' ,function($rootScope, $scope, $location){

$scope.transactions = [
                    { 'Currency':'USD',
                    	'Description': 125000,
                    	'TxHash': 'Bangalore',
                    	'Status': 'Confirmed'},
                    	{ 'Currency':'RUB',
	                    	'Description': 100000,
	                    	'TxHash': 'Bangalore',
	                    	'Status': 'Pending Burrito'},
	                    	{ 'Currency':'YEN',
	                    		'Description': 100000,
		                    	'TxHash': 115000,
		                    	'Status': 'Delivered Burrito'},
		                    	{ 'Currency':'PESO',
			                    	'Description': 150000,
			                    	'TxHash': 'Bangalore',
			                   		 'Status': 'Delivered Burrito'},
                    ];

$scope.addRow = function(){		
	$scope.transactions.push({ 'Currency':$scope.Currency, 'Description': $scope.employees, 'TxHash':$scope.txHash, 'Status': $scope.status });
	$scope.Currency='';
	$scope.Description='';
	$scope.txHash='';
	$scope.status = '';
};


}]);
