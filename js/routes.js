angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/newgame', {
        templateUrl: 'views/newgame.html',
        controller: 'NewGameController as NGC'
      });
});
