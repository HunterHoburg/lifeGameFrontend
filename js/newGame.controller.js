angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', NewGameController]);

function NewGameController (signinService, signupService) {

  var vm = this;
  // all players to add to game
  vm.players = {};
  // signin post route, returns player id
  vm.signin = signin(signinService, vm.signinInfo);
  vm.signup = signup(signupService, vm.signupInfo);
  vm.signinInfo = {};
  vm.signupInfo = {};

  function signin (signinService, playerInfo) {
    // playerInfo should be: {email: '', password: ''}
    signinService(playerInfo)
      .then(function(playerData){
        // add returned player to players obj
        // vm.players.player1 = playerData
        console.log(playerData);
      });
  }

  function signup (signupService, newPlayer) {
    signupService(newPlayer);
  }
}
