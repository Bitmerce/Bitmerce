"use strict";
/*
var Gigs = Parse.Object.extend("Gigs");
var gig = new Gigs();
 
//setInterval(function(){
gig.set("timestamp", 133702385124);
gig.set("user", "Uwe Cerron");
gig.set("currency", "USD");
gig.set("Description", "burrito");
gig.set("txHash", "this is where the hash is");
gig.set("Status", "Pending Delivery");
 
gig.save(null, {
  success: function(gig) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + gig.id);
  },
  error: function(gig, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});
$scope.apply();
//},4000);*/
/*
var query = new Parse.Query(Gig);


 setInterval(function(){

query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " gigs.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      console.log(object.id + ' - ' + object.get('user'));
    }
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});


},5000);

*/
var app = angular.module('Bitmerce', ['ng', 'ngRoute',  'ngResource', 'highcharts-ng', 'monospaced.qrcode']);

app.config(function($routeProvider) {
     $routeProvider.
      when('/', {templateUrl: 'views/login.html', controller: 'AppCtrl'}).
      when('/wallet', {templateUrl: 'views/dashboard.html', controller: 'AppCtrl'}).
      when('/about', {templateUrl: 'about.html', controller: 'AppCtrl'}).
      otherwise({redirectTo: '/'
      });
});


app.controller('AppCtrl', ['$rootScope',
    function ($scope) {
   
    setTimeout(function() {
    var el = document.getElementById("first");
    angular.element(el).triggerHandler("click");
    },0);


  $scope.logout = function(){
    window.location.assign("/");
  }

  }]);

      