(function(){
  angular.module('ngWeather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope','LocationService', 'WeatherService'];

  function HourlyController($scope, LocationService, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.latitude = LocationService.latStore;
    $scope.longitude = LocationService.lonStore;
    $scope.summaryLookup = {
      'Drizzle': 'Light Sprinkle',
    };
    $scope.$watch(function (){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });

  }
})();
