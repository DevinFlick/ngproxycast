(function(){
  angular.module('ngWeather')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider'];

  function RouteConfig($routeProvider){
    $routeProvider
    .when('/', {
      templateURL: 'html/views/home.html',
      controller: 'HomeController'
    })
    .when('/hourly',{
      template: 'hourly'
    })
    .when('/minutely',{
      template:'minutely'
    })
    .when('/daily', {
      template:'daily'
    })
    .otherwise({
      redirectTo:'/'
    });

    }
})();
