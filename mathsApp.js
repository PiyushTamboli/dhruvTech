var app = angular.module('mathsApp', [])
  .controller('mathsController', function($scope, $http, $location) {
    $scope.score = 0;
    $scope.attempts = 0;
    $scope.problem = "A";
    $scope.options= ["A", "B","C","D"];
    $scope.paramValue = $location.search().operation;
    var operation = ["+", "-"];
    var random =0;
    var result = 0;
    random = Math.floor((Math.random() * 20) + 1);
    var reset = function (){
        random = Math.floor((Math.random() * 20) + 1);
        var number1= Math.floor((Math.random() * 20) + 1);
        var number2= Math.floor((Math.random() * 20) + 1);
        if(number1 < number2){
            var temp = number1;
            number1=number2;
            number2=temp;
        }
        if (operation === "sum"){
            result = number1 + number2;
            $scope.problem = number1 + " + " + number2 + " = "
        } else {
            result = number1 - number2;
            $scope.problem = number1 + " - " + number2 + " = "
        }
        for (x in $scope.options) {
            random = Math.floor((Math.random() * 20) + 1);
            if ($scope.options.indexOf(random) === -1) {
                $scope.options[x]= random;
            } else {
                $scope.options[x]= random + 1;
            }
        }

        random = Math.floor((Math.random() * 4));
        if ($scope.options.indexOf(result) === -1) {
            $scope.options[random]= result;
        }
        console.log($scope.options);
    };
    reset();


    $scope.myFunction = function (a) {
        $scope.attempts++;
        if(a == result){
            $scope.score++;
            $scope.options= ["A", "B","C","D"];
            reset();
        }

    }
  });
