angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', 'insertArticles', 'newGameService', 'playerJoinGame', NewGameController]);

function NewGameController (signinService, signupService, insertArticles, newGameService, playerJoinGame) {

  var vm = this;
  // all players to add to game
  vm.players = [
    {
      id: 1,
      color: 'blue'
    },
    {
      id:2,
      color: 'red'
    }
  ];
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
          console.log(vm.players);
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

        // NOTE: ---------------- FIX PROMISES BELOW!!!

        // stories service insert with game_id
        var storiesPromise = new Promise(function (resolve, reject){
          insertArticles(newGameID);
        });
          // push to callarray
          promiseArray.push(storiesPromise);

        // hit newGamePlayers routes
        for (var i = 0; i < vm.players.length; i++) {
          // create promise for each player
          var playerJoinPromise = new Promise(
            playerJoinGame({
              id: newGameID,
              playerID: vm.players[i].id,
              color: vm.players[i].color
            })
          );
          // push promise to promiseArray
          promiseArray.push(playerJoinPromise);
        }
        console.log(promiseArray);

        Promise.all(promiseArray)
        .then(function(results){
          console.log(results);
        }, function(reasonFail){
          console.log(reasonFail);
        });
      });

  }
}
