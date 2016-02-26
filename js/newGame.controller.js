angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', NewGameController]);

function NewGameController (signinService, signupService) {

  var vm = this;
  // all players to add to game
  vm.players = [];
  // signin post route, returns player id
  vm.signin = signin(signinService, vm.signinInfo);
  vm.signup = signup(signupService, vm.signupInfo);
  vm.signinInfo = {};
  vm.signupInfo = {};

  function signin (signinService, emailInput, passwordInput) {
    // playerInfo should be: {email: '', password: ''}
    var playerInfo = {email: emailInput, password: passwordInput};
    signinService(playerInfo)
      .then(function(playerData){
        if (playerData.email === emailInput){
          // add returned player to players obj
          vm.players.push(playerData);
          vm.emailInput = '';
          vm.passwordInput = '';
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
      console.log(vm.players);
  }

  function signup (signupService, newPlayer) {
    signupService(newPlayer);
  }
}
