(function() {
  angular.module('ngWeather')
          .controller('LocationController', LocationController);

  LocationController.$inject = ['$scope', 'LocationService'];

  function LocationController($scope, LocationService){
    $scope.updateLocation = updateLocation;

    function updateLocation(latitude, longitude){
      LocationService.getLocation(latitude, longitude);
    }
  }
}());
