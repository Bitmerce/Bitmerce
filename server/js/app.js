"use strict";

var app =angular.module('Bitmerce', ["ngResource",'ngRoute']);
//app.config(function ($routeProvider) {
  //authentication
    /*$routeProvider.when('/login',{
        resolve:{
          authenticate:function($location,$rootScope,WalletManager){
              console.log("authentication called");
              //return true;   
              // Entry into App
              if( authenticated === true ){
                  //InitController()
                 // $location.path("/Home");
               }

              if (!WalletManager.isAuthenticated)
              {
                  $location.path('/login');
              }

              WalletManager.isAuthenticated( function(authenticated){
                     if ( authenticated === false )
                     {
                     ///   $location.path( "/login" )
                      }
                 })            
        }
      }
    });

    $routeProvider.
     when('/Home', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    }).otherwise({
        redirectTo: '/login'
      });

    $routeProvider.when( '/logout', {
        resolve:{
			logout: function($rootScope, $location) {
			return $location.path("/login");
			}
		}
	})
*/
//});//end config

  
