(function(){
  'use strict';

  angular.module('app').controller('contactsCtrl', function($scope, $http){
    function setup(){
      $http.get('/api/v1/contacts.json').then(function(response) {
        $scope.contacts = response.data;
      });
    }
    setup();

    }).directive('fileModel', ['$parse', function ($parse) {
      return {
        restrict: 'A',
          link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);

    $scope.addContacts('fileUpload', ['$http', function ($http) {
      $scope.uploadFileToUrl = function($scope.myFile, '/api/v1/contacts.json'){
        var formData = new FormData();
        formData.append('file', $scope.myFile);

        $http.post('/api/v1/contacts.json', formData, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        })

        .success(function(){
          $scope.message = response.data.message;
          $scope.contacts.push($scope.myFile);
          $scope.contacts = {};
        })

        .error(function(){
          $scope.errors = response.errors;
        });
      }
}]);
    $scope.deleteContact = function(contact) {
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };

    $scope.toggleEmailOrder = function(emailOrder) {
      if (emailOrder != $scope.emailOrder) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.emailOrder = emailOrder;
    };

    $scope.onlyIntNums = function(intNums) {
      if (intNums != $scope.intNums) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.intNums = intNums;
    };

    $scope.onlyNumsWithExt = function(numsWithExt) {
      if (numsWithExt != $scope.numsWithExt) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.numsWithExt = numsWithExt;
    };

    $scope.onlyEmailsWithCom = function(emailsWithCom) {
      if (emailsWithCom != $scope.emailsWithCom) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.onlyEmailsWithCom = onlyEmailsWithCom;
    };

  })();
