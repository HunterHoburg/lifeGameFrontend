angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', 'insertArticles', NewGameController]);

function NewGameController (signinService, signupService, insertArticles) {

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
    });
  }

  function startGame () {
    // hit new game route, get game id
    // promise all
      // stories service insert with game_id
      // hit newGamePlayers routes for each player
      // hit
  }
}
