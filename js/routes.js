angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as MC'
      })
      .when('/newGame', {
        templateUrl: 'views/newGameForm.html',
        controller: 'NewGameController as NG'
      });

});
