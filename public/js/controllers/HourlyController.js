(function(){
  angular.module('ngWeather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'Fo shizzle there be some drizzle yo',
    };
    $scope.$watch(function (){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });
  }
})();
