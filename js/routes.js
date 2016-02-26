angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      });

})
.config(function($routeProvider) {
  $routeProvider
    .when('/board', {
      templateUrl: 'views/board.html'
    });
});
