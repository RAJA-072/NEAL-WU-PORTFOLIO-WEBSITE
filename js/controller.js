// AngularJS Application
var app = angular.module('portfolioApp');

// LoginController
app.controller('LoginController', function($scope, AuthService) {
  $scope.username = '';
  $scope.password = '';
  $scope.errorMessage = '';

  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      AuthService.login($scope.username, $scope.password).then(function(response) {
        // Handle successful login
        alert('Login successful');
        // Redirect or handle login success here
      }, function(error) {
        // Handle login error
        $scope.errorMessage = 'Invalid username or password';
      });
    }
  };
});
