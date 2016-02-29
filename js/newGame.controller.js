angular.module('app')
  .controller('NewGameController', ['$location', 'signinService', 'signupService', 'insertArticles', 'newGameService', 'playerJoinGame', 'CurrentGameData', 'guestSigninService', NewGameController]);

function NewGameController ($location, signinService, signupService, insertArticles, newGameService, playerJoinGame, CurrentGameData, guestSigninService) {

  var vm = this;
  // all players to add to game
  vm.players = [];
  // hardcoded guests for signin as
  vm.guests = {
    guest1: {
      email: 'guest1@guest.com',
      password: 'guest'
    },
    guest2: {
      email: 'guest2@guest.com',
      password: 'guest'
    },
    guest3: {
      email: 'guest3@guest.com',
      password: 'guest'
    },
    guest4: {
      email: 'guest4@guest.com',
      password: 'guest'
    },
    guest5: {
      email: 'guest5@guest.com',
      password: 'guest'
    },
    guest6: {
      email: 'guest6@guest.com',
      password: 'guest'
    }
  };

  // signin post route, returns player id
  vm.signin = signin;
  vm.signup = signup;
  vm.startGame = startGame;
  vm.signinInfo = {};
  vm.signupInfo = {};
  vm.chosenColor = '';
  vm.playerId = 0;
  vm.guestCounter = 1;
  vm.colorPick = function(color) {
    vm.chosenColor = color;
    $(event.target).addClass('highlightedColor');
  };
  // SIGNIN FUNCTION
  function signin () {
    //use signinInfo to make API call
    signinService(vm.signinInfo)
      .then(function(playerData){
        if (playerData.data.email === vm.signinInfo.email){
          var newPlayerInGame = playerData.data;
          // add returned player to players obj
          newPlayerInGame.color = vm.chosenColor;
          vm.players.push(newPlayerInGame);
          vm.signinInfo.email = null;
          vm.signinInfo.password = null;
          vm.chosenColor = null;
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
  }

  vm.showModal4 = false;
  vm.toggleModal4 = function(){
    vm.showModal4 = !vm.showModal4;
  };

  vm.showModal5 = false;
  vm.toggleModal5 = function(){
    vm.showModal5 = !vm.showModal5;
  };

  function signup () {
    signupService(vm.signupInfo)
    .then(function(insertResult){
      vm.signupInfo.name = null;
      vm.signupInfo.email = null;
      vm.signupInfo.password = null;
      vm.toggleModal5();
      console.log(insertResult);
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
        }, function(reasonFail){
          console.log(reasonFail);
        });
      });
  }
}
