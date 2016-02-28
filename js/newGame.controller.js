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
  vm.chosenColor;
  vm.colorPick = function(color) {
    vm.chosenColor = color;
    console.log(vm.chosenColor);
  }
  function signin (emailIn, passwordIn) {
    // playerInfo should be: {email: '', password: ''}
    var playerInfo = {email: emailIn, password: passwordIn};
    console.log(playerInfo);
    signinService(playerInfo)
      .then(function(playerData){
        if (playerData.data.email === playerInfo.email) {
          // add returned player to players obj
          vm.players.push(playerData.data);
          vm.emailInput = '';
          vm.passwordInput = '';
          console.log(vm.players);
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
      //TODO: send this data to the games_players table
      var gamesPlayersInfo = {color: vm.chosenColor};
      console.log(gamesPlayersInfo);
  }

  function signup (newPlayer) {
    signupService(newPlayer);
  }
}
