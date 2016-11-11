(function() {
  'use strict';

  angular.module('app').controller('usersCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.getUsers = function() {
        $http.get('/api/v1/users.json').then(function(response) {
          $scope.users = response.data;
        });
      };

    $scope.addUsers = function(user) {
      $http.post('/api/v1/users.json', user).success(function(response) {
        $scope.message = response.data.message;
        $scope.users.push(user);
        $scope.user = {};
      }).error(function(response) {
        $scope.errors = response.errors;
      });
    }();
  }]);
})();
