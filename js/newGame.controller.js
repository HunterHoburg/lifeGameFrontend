angular.module('app')
  .controller('NewGameController', ['signinService', 'signupService', 'guestSigninService', NewGameController]);

function NewGameController (signinService, signupService, guestSigninService) {

  var vm = this;
  // all players to add to game
  vm.players = [];
  // signin post route, returns player id
  vm.signin = signin;
  vm.signup = signup;
  vm.signinInfo = {};
  vm.signupInfo = {};
  vm.chosenColor;
  vm.playerId;
  vm.guestCounter = 1;
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
          // console.log(playerData.data.id);
          // add returned player to players obj
          playerData.data.color = vm.chosenColor;
          playerData.data.player_id = vm.playerId;
          // console.log(playerData.data);
          vm.players.push(playerData.data);
          vm.emailInput = '';
          vm.passwordInput = '';
          // console.log(vm.players);
        } else {
          vm.errorMessage = 'wrong username or password';
        }
      });
      //TODO: send this data to the games_players table
      // var gamesPlayersInfo = {color: vm.chosenColor, player_id: vm.playerId};
      // console.log(gamesPlayersInfo);
  }
  vm.guestSubmit = guestSubmit;
  function guestSubmit() {
    //TODO: implement routes for adding a guest
    var guest = {};
    guest.color = vm.chosenColor;
    guest.name = 'Guest ' + vm.guestCounter;
    guestSigninService(guest)
      .then(function(guest){
        console.log(guest.data.message[0]);
      });
      vm.players.push(guest);
      vm.chosenColor = '';
      vm.guestCounter += 1;
  }

  function signup (newPlayer) {
    signupService(newPlayer);
  }
}
