(function(){
  angular.module('ngWeather')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider'];

  function RouteConfig($routeProvider){
    $routeProvider
    .when('/', {
      template: 'home'
    })
    .when('/hourly',{
      template: 'hourly'
    })
    .when('/minutely',{
      template:'minutely'
    })
    .when('/daily', {
      template:'daily'
    });

    // $locationProvider.html5Mode(true);
  }
})();
