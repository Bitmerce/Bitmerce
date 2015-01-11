"use strict";
  app.controller('loginController', ['$scope', '$location', '$window',
    function ($scope, $location, $window)
  {

   $scope.submit = function() {
       login(this.username,  this.password);
  	}



  function login(username, password){       
      $location.path('/wallet');
      $scope.$apply();
      $scope.$on('$routeChangeSuccess', function () { console.log("success") });
  }//end login()


}])
