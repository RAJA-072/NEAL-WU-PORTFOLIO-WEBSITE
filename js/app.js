// AngularJS Application
var app = angular.module('portfolioApp', []);

// AuthService for handling login
app.factory('AuthService', function($http) {
  return {
    login: function(username, password) {
      console.log('AuthService: login called'); // Log statement
      // Example API endpoint for login
      return $http.post('/api/login', { username: username, password: password });
    }
  };
});

// LoginController
app.controller('LoginController', function($scope, AuthService) {
  $scope.username = '';
  $scope.password = '';
  $scope.errorMessage = '';

  // Function to handle login
  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      console.log('LoginController: login function called'); // Log statement
      AuthService.login($scope.username, $scope.password).then(function(response) {
        // Handle successful login
        console.log('Login successful:', response.data); // Log statement
        alert('Login successful');
        // Redirect or handle login success here
        $scope.errorMessage = ''; // Clear any previous error messages
      }, function(error) {
        // Handle login error
        console.log('Login failed:', error); // Log statement
        if (error.status === 401) { // Example status code for unauthorized access
          $scope.errorMessage = 'Invalid username or password';
        } else {
          $scope.errorMessage = 'An error occurred. Please try again.';
        }
      });
    }
  };

  // Watch for changes in the form inputs to clear the error message
  $scope.$watch('username', function(newVal) {
    if (newVal) {
      $scope.errorMessage = ''; // Clear error message when user starts typing
    }
  });

  $scope.$watch('password', function(newVal) {
    if (newVal) {
      $scope.errorMessage = ''; // Clear error message when user starts typing
    }
  });
});
