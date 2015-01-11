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
	$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
	$scope.name='';
	$scope.employees='';
	$scope.headoffice='';
};


}]);
/*
<table class="table">
	<tr>
		<th>Currency
		</th>
		<th>Description
		</th>
		<thBitcoin Hash
		</th>
		<th>Status
		</th>
	</tr>
	<tr ng-repeat="transaction in transactions">
		<td>{ {transaction.Currency}}
		</td>
		<td>{ {transaction.Description}}
		</td>
		<td>{ {transaction.TxHash'}}
		</td>
		<td>{ {transaction.Status}}
		</td>
	</tr>
</table>*/