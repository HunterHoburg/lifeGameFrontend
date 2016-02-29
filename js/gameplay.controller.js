var app = angular.module('app');

app.controller('gameplayController', ['forkingService', 'passingService', 'eventSpaceService', 'playerAddTokenService', 'playerRemoveTokenService', '$timeout', 'CurrentGameData', gameplayController]);

function gameplayController(forkingService, passingService, eventSpaceService, playerAddTokenService, playerRemoveTokenService, $timeout, CurrentGameData) {
  var vm = this;
  vm.show = true;
  vm.currRoll = 0;
  var turn = 0;

  vm.hudStats = null;
  updateHud(CurrentGameData);

  function updateHud(playerData) {
    vm.hudStats = playerData.players[turn];
  }

  vm.rollDie = function() {
    vm.currRoll = Math.floor(Math.random() * 10);
    vm.startGame(CurrentGameData, vm.currRoll);
  };

  vm.startGame = function(playerData, roll) {
    playerMove(playerData.players[turn], roll);
    turn++;
    if (!playerData.players[turn]) {
      turn = 0;
    }
    updateHud(CurrentGameData);
  };

  var $gameBoard = $('.board');
  // pathCollege pathWork join to pathJoinWorkCollege; pathJoinWorkCollege splits to the single and married routes
  // the single and married paths join on pathJoinSingleMarriage which splits on downlong and leftshort
  // (as a note downlong and left short will be sharing the last two squares in their array instead of making a new
  // two square join array) and then those paths will either go on the left or right path on the final fork which joins
  // on pathFinal
  var start = [$gameBoard[20]];
  var pathCollege = [$gameBoard[10], $gameBoard[0], $gameBoard[1], $gameBoard[11], $gameBoard[21], $gameBoard[22], $gameBoard[32], $gameBoard[31], $gameBoard[41]];
  var pathWork = [$gameBoard[30], $gameBoard[40], $gameBoard[50]];
  var pathJoinWorkCollege = [$gameBoard[51], $gameBoard[52], $gameBoard[42], $gameBoard[43], $gameBoard[53], $gameBoard[63], $gameBoard[62], $gameBoard[61], $gameBoard[60], $gameBoard[70], $gameBoard[80], $gameBoard[90], $gameBoard[91], $gameBoard[92], $gameBoard[93], $gameBoard[94]];
  var pathSingle = [$gameBoard[84], $gameBoard[83], $gameBoard[82], $gameBoard[81], $gameBoard[71], $gameBoard[72], $gameBoard[73], $gameBoard[74], $gameBoard[75], $gameBoard[76], $gameBoard[77], $gameBoard[78], $gameBoard[88]];
  var pathMarriage = [$gameBoard[95], $gameBoard[85], $gameBoard[86], $gameBoard[96], $gameBoard[97]];
  var pathJoinSingleMarriage = [$gameBoard[98], $gameBoard[99], $gameBoard[89], $gameBoard[79], $gameBoard[69], $gameBoard[59], $gameBoard[49], $gameBoard[48], $gameBoard[38], $gameBoard[37]];
  var pathDownLong = [$gameBoard[47], $gameBoard[57], $gameBoard[67], $gameBoard[66], $gameBoard[65], $gameBoard[64], $gameBoard[54], $gameBoard[44], $gameBoard[34], $gameBoard[24]];
  var pathLeftShort = [$gameBoard[36], $gameBoard[35], $gameBoard[34], $gameBoard[24]];
  var pathLeftTop = [$gameBoard[23], $gameBoard[13], $gameBoard[3], $gameBoard[4], $gameBoard[5]];
  var pathRightTop = [$gameBoard[25], $gameBoard[26], $gameBoard[27], $gameBoard[17], $gameBoard[16]];
  var drugCircle = [$gameBoard[56], $gameBoard[55], $gameBoard[45], $gameBoard[46]];
  var pathFinal = [$gameBoard[6], $gameBoard[7], $gameBoard[8], $gameBoard[9], $gameBoard[19], $gameBoard[29], $gameBoard[39]];
  var masterPath = [start, pathCollege, pathWork, pathJoinWorkCollege, pathSingle, pathMarriage, pathJoinSingleMarriage, pathDownLong, pathLeftShort, pathLeftTop, pathRightTop, drugCircle, pathFinal];

  var billy = {
   player_id: 3,
   color: 'red',
   name: 'billy',
   money: 0,
   position: 0,
   curr: start,
   next: [],
   remainMvmt: 0,
   occupation: 'none',
   college: false,
   marriage: false,
   kids: 0,
   chipotle: false,
   salary: 0,
   addiction: []
  };

  console.log(CurrentGameData.players);
  CurrentGameData.players.forEach(function(player) {
    console.log(player);
    player.curr = start;
    addToken(player);
  });
  // function checkPosition() {
  //   playerPosition(pathCollege[4], 0);
  //   // playerPosition(pathJoinWorkCollege[15]);
  //   // playerPosition(pathJoinWorkCollege[1]);
  //   // playerPosition(pathMarriage[4]);
  //   // playerPosition(pathCollege[0]);
  //   playerPosition(pathRightTop[2], 0);
  //   playerPosition(pathFinal[0], 0);
  //   playerPosition(pathFinal[1], 0);
  //   playerPosition(pathFinal[2], 0);
  //   playerPosition(pathFinal[3], 0);
  //   playerPosition(pathFinal[4], 0);
  //   playerPosition(pathFinal[5], 0);
  // }

  // checkPosition();

  function fork(player) {
    player.next = forkingService(player.curr[player.position], masterPath);
  }

  function passSpace(player) {
    var isEvent = passingService(player.curr[player.position]);
    // console.log(isEvent);
    if (isEvent === 'payday') {
      player.money += player.salary;
    } else if (isEvent === 'payCollege') {
      player.money -= 100000;
    } else if (isEvent === 'graduate') {
      player.college = true;
    } else if (isEvent === 'getMarried') {
      player.marriage = true;
    } else if (isEvent === 'stop') {
      player.remainMvmt = 0;
    }
  }

  function eventLanding(player) {
    eventSpaceService(player.curr[player.position], player);
  }

  function addToken(player) {
    playerAddTokenService(player);
  }

  function playerMove(playerData, roll) {
    playerRemoveTokenService(playerData);
    if (playerData.curr[playerData.position] === start[0]) {
      fork(playerData);
    }

    console.log(roll);
    for (var i = roll; i >= 0; i--) {
      console.log(i);
      playerData.remainMvmt = i;
      playerData.position++;
      if (!playerData.curr[playerData.position] && (playerData.next === pathWork || playerData.next === pathCollege)) {
        playerData.curr = playerData.next;
        playerData.next = pathJoinWorkCollege;
        playerData.position = 0;
      } else if (!playerData.curr[playerData.position] && (playerData.next === pathSingle || playerData.next === pathMarriage)) {
        playerData.curr = playerData.next;
        playerData.next = pathJoinSingleMarriage;
        playerData.position = 0;
      } else if (!playerData.curr[playerData.position] && (playerData.next === pathLeftTop || playerData.next === pathRightTop)) {
        playerData.curr = playerData.next;
        playerData.next = pathFinal;
        playerData.position = 0;
      } else if (!playerData.curr[playerData.position] && playerData.curr === pathFinal) {
        console.log(playerData.name + 'died of old age!');
      } else if (!playerData.curr[playerData.position]) {
        playerData.curr = playerData.next;
        playerData.next = [];
        playerData.position = 0;
      }
      if ($(playerData.curr[playerData.position]).hasClass('fork')) {
        // do a thing here to set next position
        fork(playerData);
      }
      if (i >= 0) {
        // check to see if we are passing any green or stop spaces
        passSpace(playerData);
      }
      i = playerData.remainMvmt;
      if (i <= 0) {
        console.log('in here');
        // check to see what event they landed on
        eventLanding(playerData);
        addToken(playerData);
      }
    }
  };

  var positionMap = {
    0: pathCollege[1],
    1: pathCollege[2],
    3: pathLeftTop[2],
    4: pathLeftTop[3],
    5: pathLeftTop[4],
    6: pathFinal[0],
    7: pathFinal[1],
    8: pathFinal[2],
    9: pathFinal[3],
    10: pathCollege[0],
    11: pathCollege[3],
    13: pathLeftTop[1],
    16: pathRightTop[4],
    17: pathRightTop[3],
    19: pathFinal[4],
    20: start[0],
    21: pathCollege[4],
    22: pathCollege[5],
    23: pathLeftTop[0],
    24: pathLeftShort[3],
    25: pathRightTop[0],
    26: pathRightTop[1],
    27: pathRightTop[2],
    29: pathFinal[5],
    30: pathWork[0],
    31: pathCollege[7],
    32: pathCollege[6],
    34: pathLeftShort[2],
    35: pathLeftShort[1],
    36: pathLeftShort[0],
    37: pathJoinSingleMarriage[9],
    38: pathJoinSingleMarriage[8],
    39: pathFinal[6],
    40: pathWork[1],
    41: pathCollege[8],
    42: pathJoinWorkCollege[2],
    43: pathJoinWorkCollege[3],
    44: pathDownLong[7],
    45: drugCircle[2],
    46: drugCircle[3],
    47: pathDownLong[0],
    48: pathJoinSingleMarriage[7],
    49: pathJoinSingleMarriage[6],
    50: pathWork[2],
    51: pathJoinWorkCollege[0],
    52: pathJoinWorkCollege[1],
    53: pathJoinWorkCollege[4],
    54: pathDownLong[6],
    55: drugCircle[1],
    56: drugCircle[0],
    57: pathDownLong[1],
    59: pathJoinSingleMarriage[5],
    60: pathJoinWorkCollege[8],
    61: pathJoinWorkCollege[7],
    62: pathJoinWorkCollege[6],
    63: pathJoinWorkCollege[5],
    64: pathDownLong[5],
    65: pathDownLong[4],
    66: pathDownLong[3],
    67: pathDownLong[2],
    69: pathJoinSingleMarriage[4],
    70: pathJoinWorkCollege[9],
    71: pathSingle[4],
    72: pathSingle[5],
    73: pathSingle[6],
    74: pathSingle[7],
    75: pathSingle[8],
    76: pathSingle[9],
    77: pathSingle[10],
    78: pathSingle[11],
    79: pathJoinSingleMarriage[3],
    80: pathJoinWorkCollege[10],
    81: pathSingle[3],
    82: pathSingle[2],
    83: pathSingle[1],
    84: pathSingle[0],
    85: pathMarriage[1],
    86: pathMarriage[2],
    88: pathSingle[12],
    89: pathJoinSingleMarriage[2],
    90: pathJoinWorkCollege[11],
    91: pathJoinWorkCollege[12],
    92: pathJoinWorkCollege[13],
    93: pathJoinWorkCollege[14],
    94: pathJoinWorkCollege[15],
    95: pathMarriage[0],
    96: pathMarriage[3],
    97: pathMarriage[4],
    98: pathJoinSingleMarriage[0],
    99: pathJoinSingleMarriage[1]
  }

  vm.flag = false;
  vm.currentCardData = {};
  vm.modalEnter = function(data) {
    vm.flag = true;
    console.log('banana');
    $timeout(function(data){
      if(vm.flag){
        //TODO: implement something that pulls event data from the event page and plugs it in here
        vm.currentCardData.title;
        // vm.currentCardData.title = 'College';
        vm.currentCardData.content = data;
        vm.popoverIsVisible = true;
      }
    }, 700);
  };
  vm.splitModalEnter = function(data) {
    vm.flag = true;
    console.log('apple');
    $timeout(function(){
      if(vm.flag){
        vm.currentCardData.title;
        vm.currentCardData.content = 'You pay $5,000!';
        vm.splitPopoverIsVisible = true;
        console.log('success');
      }
    }, 700);
  };
  vm.closeModal = function() {
    vm.popoverIsVisible = false;
  };
  vm.splitCloseModal = function() {
    vm.splitPopoverIsVisible = false;
  };
  vm.modalCancel = function() {
    vm.flag = false;
  };
  vm.splitModalCancel = function() {
    vm.flag = false;
  };
}
