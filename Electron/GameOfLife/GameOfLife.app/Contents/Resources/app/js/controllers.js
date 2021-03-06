var app = angular.module("app");

app.controller('MainController', ['$http', 'newGameService', 'playerJoinGame', 'insertArticles', 'signupService',  'CurrentGameData', '$timeout', MainController]);


  //CONTROLLER FOR QUERYING EL GUARDIAN API
  function MainController ($http, newGameService, playerJoinGame, insertArticles, signupService, CurrentGameData, $timeout){
    var vm = this;
    console.log(CurrentGameData);
    vm.newPlayer = signupService;
    //CURRENTTITLE, CURRENTURL, AND CURRENTSENTIMENT ARE TEMPORARY AND FOR TESTING ONLY
    vm.currentTitle;
    vm.currentURL;
    vm.currentSentiment;
    vm.storiesArr = [];
    vm.currentCardData = {};
    vm.title = "Life is Short, and Then You Die :)";
    //QUERYING THE GUARDIAN FOR 50 STORIES
    vm.getArticles = function(topic) {
      var topicArr = topic.split(' ');
      var parsedTopic;
      for (var i = 0; i < topicArr.length; i++) {
        if(topicArr.length > 1) {
          topicArr[i] += '+';
          parsedTopic += topicArr[i];
        } else {
          parsedTopic = topicArr[i];
        }
      }
      $http.get('http://content.guardianapis.com/search?q='+parsedTopic+'&page-size=50&from-date=2015-01-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0&show-blocks=all').success(function(res) {
        console.log(res);
        vm.currentTitle = res.response.results[0].webTitle;
        vm.currentURL = res.response.results[0].webUrl;
        for (var i = 0; i < res.response.results.length; i++) {

          //FUNCTION FOR GETTING SENTIMENT
          var sentiment;
          $http({
            method: 'POST',
            url: 'https://buzzlogix-text-analysis.p.mashape.com/sentiment',
            headers: {
            'X-Mashape-Key': 'tKN2shyLLimshtwjog91r18SHQdVp1NAYE2jsn83if2xCZHEia',
            'content-type': 'text/plain'
            },
            data: {text: res.response.results[i].blocks.body[0].bodyTextSummary}
          }).then(function(data) {
            // console.log(data.data.Predicted_Class)
            // console.log(data.data.Probability);
            vm.currentSentiment = data.data.Predicted_Class;
            sentiment = data.data.Predicted_Class;
            return sentiment;
          }, function(data) {
            console.log('error: ' + data);
          })

          //Lo, the knex function to push stories into the table
          var title = res.response.results[i].webTitle;
          var url = res.response.results[i].webUrl;
          var type = res.response.results[i].type;
          $http({
            method: 'POST',
            url: 'https://powerful-sea-93234.herokuapp.com/insert',
            data: {
              title: title,
              url: url,
              sentiment: sentiment,
              game_id: 1,
              type: type
            }
          }).then(function(data) {
            console.log('success ' + data);
          });
        }
      });
    };
    vm.openSignUp = function() {

    }
    vm.signUp = function(username, email, password) {
      // HTTP route here
    }
    vm.listArticles = function() {
      $http({
        method: 'POST',
        url: 'https://powerful-sea-93234.herokuapp.com/getstories',
        data: {
          game_id: 1
        }
      }).then(function(data){
        vm.storiesArr.push(data);
      });
    };


//this is a function for instantiating a new game
    vm.gameData = {};
    vm.newGame = function() {
      newGameService().then(function(info){
        console.log(info.data[0]);
        vm.gameData.id = info.data[0];
        console.log(vm.gameData);
        vm.playerJoinGame(vm.gameData);
        // vm.addArticles(vm.gameData.id);
      });
    };
    // vm.newGame();

//this is adding a player to a game
    vm.playerJoinGame = function(gameData) {
      playerJoinGame(gameData).then(function(info){
        console.log(info);
      });
    };

    vm.addArticles = function(gameId) {
      insertArticles(gameId);
    };


  //controlling the modal windows
    vm.showModal = false;
    vm.toggleModal = function(){
    vm.showModal = !vm.showModal;

    };


    vm.showModal2 = false;
    vm.toggleModal2 = function(){
    vm.showModal2 = !vm.showModal2;

    };

    vm.showModal3 = false;
    vm.toggleModal3 = function(){
    vm.showModal3 = !vm.showModal3;

    };

    //TODO: implement the above two functions on all modals so they close and open correctly every time
    //TODO: will probably need to give HUD a z-index greater than the modal so the mouseleave will work

  //login button WE SHOULD TAKE THESE OUT
    vm.loginSubmit = function(email, password){
      $http({
        method: 'POST',
        url: 'https://powerful-sea-93234.herokuapp.com/signin',
        data: {
          email: email,
          password: password
        }
      }).then(function(data){
        console.log(data);
      });
    };

    vm.signupSubmit = function(firstname, lastname, email, password){
      $http({
        method: 'POST',
        url: 'https://powerful-sea-93234.herokuapp.com/newPlayer',
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        }
      }).then(function(data){
        console.log(data);
      });
    };
}
