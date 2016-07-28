(function(){
  angular.module('ngWeather')
          .controller('LocationController', LocationController);

  LocationController.$inject = ['$scope', 'LocationService', 'WeatherService'];

  function LocationController($scope, LocationService, WeatherService){
    $scope.updateLocation = updateLocation;
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
//     $scope.latitude = 29; //sets to gainesville latitude
//     $scope.longitude = -82; //sets to gainesville longitude
// //sent to HourlyController
    function updateHourly(latitude, longitude){
      WeatherService.getHourlyData(latitude, longitude);
    }

    function updateMinutely(latitude, longitude){
      WeatherService.getMinutelyData(latitude, longitude);
    }
    function updateDaily(latitude, longitude){
      WeatherService.getDailyData(latitude, longitude);
    }

    function updateLocation(latitude, longitude){
      LocationService.updateLocation(latitude, longitude);
    }
  };


}());
