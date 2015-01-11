"use strict";

var privKey = new bitcore.PrivateKey();
var address = privKey.toAddress();

console.log(address);

var app = angular.module('Bitmerce', ['ng', 'ngRoute',  'ngResource', 'highcharts-ng']);

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

      