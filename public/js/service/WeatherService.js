(function(){
  angular.module('ngWeather')
          .factory('WeatherService', WeatherService);
  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var passphrase = 'i like cheese and bacon and some other things too';
    var baseURL = 'https://quiet-bayou-88937.herokuapp.com/';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      // left to right is from --> to  so from controller to service function right must match function below left must match controller
      getHourlyData: getHourlyData,
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;
    function getHourlyData(lat, lon){
      var url = baseURL + 'forecast/hourly/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){ //make sure this response is seperate from 'res'
                    service.weather = response.data;
                  });
    }
    function getMinutelyData(lat, lon){
      var url = baseURL + 'forecast/minutely/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                  });
    }
    function getDailyData(lat, lon){
      var url = baseURL + 'forecast/minutely/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                  });
    }
  }
})();
