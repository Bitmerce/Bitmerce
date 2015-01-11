"use strict";

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();
 /*
gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);
 
gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});*/


var query = new Parse.Query(GameScore);

/*
 setInterval(function(){

query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      console.log(object.id + ' - ' + object.get('playerName'));
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

      