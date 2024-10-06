// AngularJS Application
var app = angular.module('portfolioApp', []);

// AuthService for handling login
app.factory('AuthService', function($http) {
  return {
    login: function(username, password) {
      // Example API endpoint for login
      return $http.post('/api/login', { username: username, password: password });
    }
  };
});
