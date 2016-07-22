(function(){
  angular.module('ngWeather')
          .controller('SimpleController', SimpleController);

SimpleController.$inject = ['$scope', 'WeatherService'];

function SimpleController($scope, WeatherService){
  $scope.message ='YOU TURKEY!';
  WeatherService.getHourlyData(29, -82);
}
})();
