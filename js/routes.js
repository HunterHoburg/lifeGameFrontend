angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as MC'
      })
      .when('/newgame', {
        templateUrl: 'views/newgame.html',
        controller: 'NewGameController as NGC'
      })
    .when('/board', {
      templateUrl: 'views/board.html',
      controller: 'MainController as MC'
    });
});
