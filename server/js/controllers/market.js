"use strict";
app.controller("MarketController",[ '$rootScope', '$scope', '$location' ,function($rootScope, $scope, $location){

var Market = Parse.Object.extend("Market");
var gig = new Market();
var query = new Parse.Query(Market);

$scope.Orders = [];

//poll for new notification
function trigger() {
setTimeout(function() {
$scope.Orders = query.find().then(function(results) {

	var holder = [];
 // Do something with the returned Parse.Object values
	for (var i = 0; i < results.length; i++) { 
	  var object = results[i];
	  holder.push({'Title':object.get('title'), 'Description':object.get('description'), 'Price': object.get('price'), 'User': object.get('user'), 'Status': object.get('status')});    
	}
	console.log(holder[0]);
	$scope.Orders = holder;
	;
		$scope.$apply();
	return holder;
	 //console.log(holder);
});
}, 2000);
}
trigger();
$scope.addRow = function(title, description, price) {
	gig.set("timestamp", Date.now());
	gig.set("user", "Uwe Cerron");
	gig.set("title", title);
	gig.set("price", price)
	gig.set("currency", "USD");
	gig.set("description", description);
	gig.set("txHash","505b42ec5e8499843ae3ad6f56f66ce52025d37205df19fb5777179d407b2978"); //505b42ec5e8499843ae3ad6f56f66ce52025d37205df19fb5777179d407b2978
	gig.set("status","Pending");
	gig.save(null, {
	  success: function(gig) {
	    // Execute any logic that should take place after the object is saved.
	    	trigger();
	    	//$scope.apply(
	    	$scope.title= "";
	    	$scope.description= "";
	    	$scope.price ="";
	    	//);
	    console.log('New object created with objectId: ' + gig.id);
	  },
	  error: function(gig, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    console.log('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

}]);
