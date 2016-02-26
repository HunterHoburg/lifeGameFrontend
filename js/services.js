angular.module('app')
  .service('newGameService', ['$http', newGameService])
  .service('playerJoinGame', ['$http', playerJoinGame]);

function newGameService($http){
  return function() {
    return $http.post('//localhost:3000/newGame');
  };
}


function playerJoinGame($http){
  return function(gameSession) {
    return $http.post('//localhost:3000/newGamePlayer', gameSession);
  }
}