angular.module('app')
  .service('newGameService', ['$http', newGameService])
  .service('playerJoinGame', ['$http', playerJoinGame])
  .service('insertArticles', ['$http', insertArticles])
  .service('signinService', ['$http', signinService])
  .service('signupService', ['$http', signupService])
  .service('CurrentGameData', [CurrentGameData])
  .service('drawCardService', ['$http', drawCardService])
  .service('guestSigninService', ['$http', guestSigninService]);

function signinService ($http){
  return function(playerObject) {
    return $http.post('//localhost:3000/signin', playerObject);
  };
}

// function signupService ($http) {
//   return function (newPlayerObject) {
//     return $http.post('//localhost:3000/newPlayer', newPlayerObject);
//   };
// }

function signupService($http){
  return function(newPlayerData) {
    // var newPlayerData = {
    //   name: playerName,
    //   email: playerEmail,
    //   password: playerPassword,
    //   color: playerColor,
    //   gender: playerGender
    // };
    console.log('service was called for this player: ' + newPlayerData);
    return $http.post('//localhost:3000/newPlayer', newPlayerData);
  };
}

function newGameService($http){
  return function() {
    return $http.post('//localhost:3000/newGame');
  };
}

function playerJoinGame($http){
  return function(newGamePlayerInfo) {
    return $http.post('//localhost:3000/newGamePlayer', newGamePlayerInfo);
  };
}

function guestSigninService($http) {
  return function(guest) {
    return $http.post('//localhost:3000/newGamePlayer', guest);
  };
}

function insertArticles($http) {
  return function(gameSession) {
    var articles = [];
    var promises = [];

$http.get('http://content.guardianapis.com/search?q=unemployment%20AND%20jobs&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0')
.then(function(jobsArticles) {
      jobsArticles.data.response.results.forEach(function(article) {
        article.gameSession = gameSession;
        article.type = 'jobs';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=despair%20AND%20death&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(deathArticles) {
      deathArticles.data.response.results.forEach(function(article) {
        article.gameSession = gameSession;
        article.type = 'death';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=flooding%20OR%20earthquake%20OR%20wildfire%OR%20sinkhole&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(natureArticles) {
      natureArticles.data.response.results.forEach(function(article) {
        article.type = 'nature';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=stock%20market%20AND%20crash&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(financeArticles) {
      financeArticles.data.response.results.forEach(function(article) {
        article.gameSession = gameSession;
        article.type = 'finance';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=druge%20abuse&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(drugsArticles) {
      drugsArticles.data.response.results.forEach(function(article) {
        article.gameSession = gameSession;
        article.type = 'drugs';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=crime%20AND%20unsolved&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(crimeArticles) {
      crimeArticles.data.response.results.forEach(function(article) {
        article.gameSession = gameSession;
        article.type = 'crime';
        articles.push(article);
      });
      return $http.get('http://content.guardianapis.com/search?q=divorce%20AND%20marriage&page-size=50&from-date=2015-07-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0');
    }).then(function(marriageArticles) {

      for (var i = 0; i < marriageArticles.data.response.results.length; i++) {
        marriageArticles.data.response.results[i].gameSession = gameSession;
        marriageArticles.data.response.results[i].type = 'marriage';
        articles.push(marriageArticles.data.response.results[i]);
        if (i === marriageArticles.data.response.results.length - 1) {
          for (var j = 0; j < articles.length; j++) {
            promises.push($http.post('//localhost:3000/newGameStories', articles[j]));
          }
          Promise.all(promises).then(function(finished) {
            // console.log(finished);
          });
        }
      }
    });
  };
}

function drawCardService ($http){
  return function(cardType, gameid) {
    return $http.post('//localhost:3000/drawCard', {type: cardType, game_id: gameid });
  };
}

function CurrentGameData () {
  var gameData = {};
  gameData.game_id;
  gameData.players = [];
  gameData.addPlayer = function(player){
    gameData.players.push(player);
  };
    // contains player data from
  return gameData;
}
