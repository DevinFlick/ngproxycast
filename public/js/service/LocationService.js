(function(){
  angular.module('ngWeather')
          .factory('locationService', locationService);
  locationService.$inject = ['$http'];

  function locationService($http){
    var service{
      getLocation: updateLocation,
      latStore: {},
      lonStore: {},
    };
    return service;

    function updateLocation (lat, lon){
      return $scope.latitude //issue here
                  .then(function(response){
                    service.latStore = response.data;
                    console.log(service.latStore);
                  });
      return $scope.longitude
                  .then(function(response){
                    service.lonStore = response.data;
                    console.log(service.lonStore);
                  });
    }
  }
})();
