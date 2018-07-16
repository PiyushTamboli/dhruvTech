var app = angular.module('spellingApp', [])
  .controller('spellingController', function($scope, $http) {
    $scope.score = 0;
    $scope.attempts = 0;
    $scope.spellings = {"A" : ["A", "B","C","D"]};
    $scope.spelling=[];
    var random =0;
    var keys =[];
        $http.get("https://piyushtamboli.github.io/dhruvTech/spellingApp.json")
        .then(function(response) {
            $scope.spellings = response.data;
            //console.log("JSON Loaded");
            //console.log(response.data);
            keys = Object.keys($scope.spellings);
            //console.log(keys.length);
            random = Math.floor((Math.random() * keys.length) + 1);
            //console.log(random);
            $scope.spelling = $scope.spellings[keys[random]];
            //console.log($scope.spelling);
        });

    console.log($scope.spellings.A[1]);
    $scope.myFunction = function (a) {
        $scope.attempts++;
        if($scope.spellings.hasOwnProperty(a)){
            $scope.score++;
            random = Math.floor((Math.random() * keys.length) + 1);
            $scope.spelling = $scope.spellings[keys[random]];
            //console.log($scope.score);
        }

    }
  });
  app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  });