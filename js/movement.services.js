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
      console.log('marriage event');
    } else if ($pieceData.hasClass('nature')) {
      console.log('nature event');
    } else if ($pieceData.hasClass('jobs')) {
      console.log('unemployment event');
    } else if ($pieceData.hasClass('financial')) {
      console.log('financial event');
    } else if ($pieceData.hasClass('mystery')) {
      console.log('any event');
    } else if ($pieceData.hasClass('death')) {
      console.log('death event');
    } else if ($pieceData.hasClass('drugs')) {
      console.log('drug event');
    } else if ($pieceData.hasClass('crime')) {
      console.log('crime event');
    } else if ($pieceData.hasClass('health')) {
      console.log('health event');
    } else if ($pieceData.hasClass('getJob')) {
      console.log('get a job');
    } else {
      console.log('some other event');
    }

  };
}

function playerAddTokenService() {
  return function(player) {
    var $piece = $(player.curr[player.position]);
    var $pieceData = $($piece.children()[0]);
    // console.log($piece.children());
    $pieceData.append('<div class="playerMark" id='+player.name+'></div>');
    $landingSquare = $($pieceData.children()[0]);
    $landingSquare.css('background-color', player.color);
  };
}

function playerRemoveTokenService() {
  return function(player) {
    var $piece = $(player.curr[player.position]);
    var $pieceData = $($piece.children()[0]);
    var $newChild = $($pieceData[0]);
    console.log($newChild);

    for (var i = 0; i < $newChild.length; i++) {
      var $pieceChild = $($newChild.children()[i]);
      console.log($pieceChild);
      console.log($pieceChild.is('#' + player.name));
      if ($pieceChild.is('#'+player.name)) {
        $pieceChild.remove();
      }
    }
  };
}
