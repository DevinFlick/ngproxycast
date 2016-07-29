(function(){
  angular.module('ngWeather')
          .controller('LocationController', LocationController);

  LocationController.$inject = ['$scope', 'LocationService', 'WeatherService'];

  function LocationController($scope, LocationService, WeatherService){
    // $scope.updateLocation = updateLocation; //no ng-click for this
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
//     $scope.latitude = 29; //sets to gainesville latitude
//     $scope.longitude = -82; //sets to gainesville longitude
// //sent to HourlyController
function updateHourly(latitude, longitude){
  WeatherService.getHourlyData(latitude, longitude)
                .then(function(){  // this "failsafe" forces the controller to update with the service data
                  $scope.weather = WeatherService.weather;
                  console.log($scope.weather);
                });
};

function updateMinutely(latitude, longitude){
  WeatherService.getMinutelyData(latitude, longitude)
                .then(function(){
                  $scope.weather = WeatherService.weather;
                  console.log($scope.weather);
                });
};

function updateDaily(latitude, longitude){
  WeatherService.getDailyData(latitude, longitude)
                .then(function(){
                  $scope.weather = WeatherService.weather;
                  console.log($scope.weather);
                });
};

// function updateLocation(latitude, longitude){
//   LocationService.updateLocation(latitude, longitude);
// }
};

}());
