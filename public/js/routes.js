(function(){
  angular.module('ngWeather')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateURL: 'html/views/home.html',
      controller: 'HomeController'
    })
    .when('/hourly',{
      templateURL: 'html/views/hourly.html',

    })
    .when('/minutely',{
      templateURL:'html/views/minutely.html',

    })
    .when('/daily', {
      templateURL:'html/views/daily.html',

    })
    .otherwise({
      redirectTo:'/'
    });

    }
})();
