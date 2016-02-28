angular.module('app')
  .controller('NewGameController', ['$location', 'signinService', 'signupService', 'insertArticles', 'newGameService', 'playerJoinGame', 'CurrentGameData', NewGameController]);

function NewGameController ($location, signinService, signupService, insertArticles, newGameService, playerJoinGame, CurrentGameData) {

  var vm = this;
  // all players to add to game
  vm.players = [];
  // signin post route, returns player id
  vm.signin = signin;
  vm.signup = signup;
  vm.startGame = startGame;
  vm.signinInfo = {};
  vm.signupInfo = {};

  function signin () {
    // playerInfo should be: {email: '', password: ''}
    // var playerInfo = {email: vm.emailInput, password: vm.passwordInput};
    signinService(vm.signinInfo)
      .then(function(playerData){
        if (playerData.data.email === vm.signinInfo.email){
          // add returned player to players obj
          vm.players.push(playerData.data);
          vm.signinInfo.email = '';
          vm.signinInfo.password = '';
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
  }

  function signup () {
    signupService(vm.signupInfo)
    .then(function(insertResult){
      console.log(insertResult);
      // SHOW message based on result of insert attempt
      // if (insertResult.data[0].insert === 1) {
      //   vm.successMessage = vm.signupInfo.name + ' is signed up!';
      // } else {
      //   vm.errorMessage = 'unsuccessful signup, try again!';
      // }
    });
  }

  function startGame () {
    // hit new game route, get game id
    var newGameID;
    newGameService()
      .then(function(newGameInfo){
        newGameID = newGameInfo.data[0];
        console.log(newGameID);
        var promiseArray = [];

        // stories service insert with game_id
        insertArticles(newGameID);
          // add players join calls to promise array
          for (var i = 0; i < vm.players.length; i++) {
            // create promise for each player
            var playerJoinPromise =
              playerJoinGame({
                id: newGameID,
                playerID: vm.players[i].id,
                color: vm.players[i].color
              });
            // push promise to promiseArray
            promiseArray.push(playerJoinPromise);
          }
        Promise.all(promiseArray)
        .then(function(results){
          console.log(results);
          // send to current game service
          for (var i = 0; i < results.length; i++) {
            var newPlayerAllData = results[i].data.message[0];
            // add name to player info if match
            if (newPlayerAllData.player_id === vm.players[i].id) {
              newPlayerAllData.name = vm.players[i].name;
            }
            // add other helpful properties
            newPlayerAllData.curr = [];
            newPlayerAllData.next = [];
            newPlayerAllData.remainMvmt = 0;
            // add player to current game session service
            CurrentGameData.addPlayer(newPlayerAllData);
          }
          // add game ID to current game session service
          CurrentGameData.game_id = newGameID;

          // redirect to /board route
          $location.path('/board');
          console.log();
        }, function(reasonFail){
          console.log(reasonFail);
        });
      });

  }
}
