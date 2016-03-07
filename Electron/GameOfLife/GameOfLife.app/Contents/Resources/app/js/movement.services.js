angular.module('app')
  .service('forkingService', [forkingService])
  .service('passingService', [passingService])
  .service('eventSpaceService', [eventSpaceService])
  .service('playerAddTokenService', [playerAddTokenService])
  .service('playerRemoveTokenService', [playerRemoveTokenService]);

function forkingService() {
  return function(location, paths) {
    var $piece = $(location);
    var response = '';
    if ($piece.hasClass('forkNS')) {
      response = window.prompt('Which direction do you want to go? North College/South Work?');
      if (response.toLowerCase() === 'n' || response.toLowerCase() === 'north') {
        return paths[1];
      } else if (response.toLowerCase() === 's' || response.toLowerCase() === 'south') {
        return paths[2];
      }
    } else if ($piece.hasClass('forkEW')) {
      response = window.prompt('Which direction do you want to go? East/West?');
      if (response.toLowerCase() === 'e' || response.toLowerCase() === 'east') {
        return paths[10];
      } else if (response.toLowerCase() === 'w' || response.toLowerCase() === 'west') {
        return paths[9];
      }
    } else if ($piece.hasClass('forkNE')) {
      response = window.prompt('Which direction do you want to go? North Single/East Marriage?');
      if (response.toLowerCase() === 'n' || response.toLowerCase() === 'north') {
        return paths[4];
      } else if (response.toLowerCase() === 'e' || response.toLowerCase() === 'east') {
        return paths[5];
      }
    } else if ($piece.hasClass('forkSW')) {
      response = window.prompt('Which direction do you want to go? West/South?');
      if (response.toLowerCase() === 'w' || response.toLowerCase() === 'west') {
        return paths[7];
      } else if (response.toLowerCase() === 's' || response.toLowerCase() === 'south') {
        return paths[8];
      }
    }
  }
}

function passingService() {
  return function(location) {
    var $piece = $(location);
    var $pieceData = $($piece.children()[1]);
    if ($pieceData.hasClass('payday')) {
      return 'payday';
    } else if ($pieceData.hasClass('payCollege')) {
      return 'payCollege';
    } else if ($pieceData.hasClass('married')) {
      return 'getMarried';
    } else if ($pieceData.hasClass('stop')) {
      return 'stop'
    } else if ($pieceData.hasClass('graduate')) {
      return 'graduate';
    } else {
      return 'non-event';
    }
  }
}

function eventSpaceService() {
  return function(location, player) {
    var $piece = $(location);
    var $pieceData = $($piece.children()[1]);
    console.log($piece);
    if ($pieceData.hasClass('marriage')) {
      return 'marriage';
    } else if ($pieceData.hasClass('nature')) {
      return 'nature';
    } else if ($pieceData.hasClass('jobs')) {
      return 'jobs';
    } else if ($pieceData.hasClass('financial')) {
      return 'finance';
    } else if ($pieceData.hasClass('mystery')) {
      return 'mystery';
    } else if ($pieceData.hasClass('death')) {
      return 'death';
    } else if ($pieceData.hasClass('drugs')) {
      return 'drugs';
    } else if ($pieceData.hasClass('crime')) {
      return 'crime';
    } else if ($pieceData.hasClass('health')) {
      return 'health';
    } else if ($pieceData.hasClass('smiley')) {
      return 'smiley';
    } else if ($pieceData.hasClass('getJob')) {
      return 'getJob';
    } else {
      console.log('some other event');
    }
  };
}

function playerAddTokenService() {
  return function(player) {
    var $piece = $(player.curr[player.position]);
    var $pieceData = $($piece.children()[0]);
    console.log($piece);
    // console.log($piece.children());
    $pieceData.append('<div class="playerMark" id=' + player.name.split(' ').join('') + '></div>');
    $landingSquare = $($pieceData.children()[$pieceData.children().length - 1]);
    $landingSquare.css('background-color', player.color);
  };
}

function playerRemoveTokenService() {
  return function(player) {
    var $piece = $(player.curr[player.position]);
    var $pieceData = $($piece.children()[0]);
    var $newChild = $($pieceData[0]);
    for (var i = 0; i < $newChild.length; i++) {
      var $pieceChild = $($newChild.children()[i]);
      if ($pieceChild.is('#'+player.name.split(' ').join(''))) {
        $pieceChild.remove();
      }
    }
  };
}
