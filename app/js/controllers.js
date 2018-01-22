var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', 
  function MyController($scope, $http) {
    $http.get('/app/js/data.json').then(function(response) {
      $scope.bootcamps = response.data;
      $scope.bootcampOrder = 'name';
      $scope.highestRated = function (bootcampOrder) {
        if(bootcampOrder === 'stars') {
          let reverse = 'reverse';
          return reverse;
        }
      };
    });
});
 