angular.module('app')
  .directive('lifeMain', [function() {
    return {
      templateUrl: './views/main.html'
    };
  }])
  .directive('lifeBoard', [function() {
    return {
      templateUrl: './views/board.html'
    };
  }]);
