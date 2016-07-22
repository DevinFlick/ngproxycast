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
      templateURL: 'html/views/hourly.html',
      controller: 'HourlyController'
    })
    .when('/minutely',{
      templateURL:'html/views/minutely.html',
      controller: 'MinutelyController'
    })
    .when('/daily', {
      templateURL:'html/views/daily.html',
      controller: 'DailyController'
    })
    .otherwise({
      redirectTo:'/'
    });

    }
})();
