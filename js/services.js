angular.module('app').service('newGameService', ['$http', newGameService]);

function newGameService($http){
  return function() {
    return $http.post('//localhost:3000/newGame');
  };
}


angular.module('app').service('playerJoinGame', ['$http', playerJoinGame]);

function playerJoinGame($http){
  
}