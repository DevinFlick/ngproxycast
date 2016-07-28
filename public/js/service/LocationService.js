(function(){
  angular.module('ngWeather')
          .factory('LocationService', LocationService);
  LocationService.$inject = [];

  function LocationService(){
    var service = {
      updateLocation: updateLocation,
      latStore: {},
      lonStore: {},
    };
    return service;

    // pulls from ng-model then plugs into latStore/lonStore
    function updateLocation (latitude, longitude){
      service.latStore = latitude;
      service.lonStore = longitude;
      console.log(service.latStore);
      console.log(service.lonStore);
    };
  }
})();
