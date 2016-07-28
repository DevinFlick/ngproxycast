(function(){
  angular.module('ngWeather')
          .factory('latlonService', latlonService);
  latlonService.$inject = ['$http'];

  function latlonService($http){}
})
