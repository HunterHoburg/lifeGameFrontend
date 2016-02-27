angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', NewGameController]);

function NewGameController (signinService, signupService) {

  var vm = this;
  // all players to add to game
  vm.players = [];
  // signin post route, returns player id
  vm.signin = signin;
  vm.signup = signup;
  vm.signinInfo = {};
  vm.signupInfo = {};

  function signin () {
    // playerInfo should be: {email: '', password: ''}
    var playerInfo = {email: vm.emailInput, password: vm.passwordInput};
    signinService(playerInfo)
      .then(function(playerData){
        if (playerData.data.email === vm.emailInput){
          // add returned player to players obj
          vm.players.push(playerData.data);
          vm.emailInput = '';
          vm.passwordInput = '';
          // console.log(vm.players);
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
  }

  function signup (newPlayer) {
    signupService(newPlayer);
  }
}
