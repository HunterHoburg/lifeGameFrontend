angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', 'insertArticles', 'newGameService', NewGameController]);

function NewGameController (signinService, signupService, insertArticles, newGameService) {

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
<<<<<<< HEAD
          vm.signinInfo.email = '';
          vm.signinInfo.password = '';
          console.log(vm.players);
=======
          vm.emailInput = '';
          vm.passwordInput = '';
          // console.log(vm.players);
>>>>>>> 09e27b7ae0985ba01694e2405628f9b3c05727fd
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
        var callarray = [];

        // stories service insert with game_id
          // push to callarray

        // hit newGamePlayers routes
          // push to call array for each player


        Promise.all(callarray)
        .then(function(results){
          console.log(results);
        });
      });

  }
}
