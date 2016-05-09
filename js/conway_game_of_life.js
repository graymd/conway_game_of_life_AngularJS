var conwayGameOfLifeApp = angular.module("conwayGameOfLifeApp", []);

var conwayGameOfLifeCtrl = conwayGameOfLifeApp.controller('conwayGameOfLifeCtrl', function($scope, $interval){
  $scope.width = 10;
  $scope.height = 10;
  $scope.nodes = createCurrentArray($scope.width, $scope.height);

  $scope.nextIteration = function() {
    nextIteration($scope.width, $scope.height, $scope.nodes);
  } 
    
  $scope.updateBoardSize = function() {
    var intWidth = parseInt($scope.gameInputs.width);
    var intHeight = parseInt($scope.gameInputs.height);
    updatedBoard = createCurrentArray(intWidth, intHeight);
    $scope.nodes = updatedBoard;
    $scope.width = intWidth;
    $scope.height = intHeight;
  }

  $scope.resetGame = function(){
    $scope.nodes = createCurrentArray($scope.width, $scope.height);
  }

  // $scope.getColumnColor = function(aliveOrDead){
  //   aliveOrDead === 1 ? "white" : "black";
  // }

 $scope.gameOn = null;

 $scope.startGame = function () {
    $scope.gameOn = $interval(function () {
      $scope.nextIteration();
      }, 500);
  };

  $scope.stopGame = function () {
    if (angular.isDefined($scope.gameOn)) {
      $interval.cancel($scope.gameOn);
    }
  };

  function createCurrentArray(width, height){
    var currentArray = new Array(width).fill(0);
    for (var i = 0; i < currentArray.length; i++) {
      currentArray[i] = new Array(height).fill(0);
    } 

    for (var i = 0; i < currentArray.length; i++){
      var innerArray = currentArray[i];
      for (var j = 0; j < innerArray.length; j++){
        currentArray[i][j] = randomAliveDead();
      }
    }
    return currentArray;
  }

  function randomAliveDead(){
    return Math.round(Math.random());
  }

  function createNextArray(width, height){
    var nextArray = new Array(width).fill(0);
    for (var i = 0; i < nextArray.length; i++) {
      nextArray[i] = new Array(height).fill(0);
    }
   return nextArray;
  }

  function nextIteration(width, height, currentState){
    currentArray = currentState;
    nextArray = createNextArray(width, height);
      for (var i = 0; i < currentArray.length; i++){
        var innerArray = currentArray[i];
        for (var j = 0; j < innerArray.length; j++){
          newAliveOrDead = updatePoint(i, j, innerArray[j]);
          nextArray[i][j] = newAliveOrDead;
        }
      }
      currentArray = nextArray;
      $scope.nodes = currentArray;
  }

  function updatePoint(x, y, status){

    var neighborAliveCount = 0;
    var neighborArray = [];
    neighborArray[0] = checkNorth(x, y);
    neighborArray[1] = checkNorthEast(x, y);
    neighborArray[2] = checkEast(x, y);
    neighborArray[3] = checkSouthEast(x, y);
    neighborArray[4] = checkSouth(x, y);
    neighborArray[5] = checkSouthWest(x, y);
    neighborArray[6] = checkWest(x, y);
    neighborArray[7] = checkNorthWest(x, y);
    neighborAliveCount = neighborArray.reduce(add, 0);
    return checkAgainstRules(status, neighborAliveCount);
  }

  function checkAgainstRules(status, neighborAliveCount){
    if (status === 1){
      return checkLiveRules(neighborAliveCount);
    } else {
      return checkDeadRules(neighborAliveCount);
    }
  }

  function checkLiveRules(neighborAliveCount){
    if (neighborAliveCount < 2) {
      return 0;
    } else if (neighborAliveCount <= 3){
      return 1;
    } else {
      return 0;
    }
  }

  function checkDeadRules(neighborAliveCount){
    return neighborAliveCount === 3 ? 1 : 0;
  }

  function add(num1, num2){
    return num1 + num2;
  }

  function checkNorth(x, y) {
    if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x + 1][y];
    return point === 1 ? 1 : 0;
  }

  function checkNorthEast(x, y) {
    if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y + 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x + 1][y + 1];
    return point === 1 ? 1 : 0;
  }

  function checkEast(x, y) {
    if (typeof(currentArray[x]) == 'undefined' || typeof(currentArray[x][y + 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x][y + 1];
    return point === 1 ? 1 : 0;
  }

  function checkSouthEast(x, y) {
    if (typeof(currentArray[x - 1]) == 'undefined' || typeof(currentArray[x - 1][y + 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x - 1][y + 1];
    return point === 1 ? 1 : 0;
  }

  function checkSouth(x, y) {
    if (typeof(currentArray[x - 1]) == 'undefined'  || typeof(currentArray[x - 1][y]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x - 1][y];
    return point === 1 ? 1 : 0;
  }

  function checkSouthWest(x, y) {
    if (typeof(currentArray[x - 1]) == 'undefined' || typeof(currentArray[x - 1][y - 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x - 1][y - 1];
    return point === 1 ? 1 : 0;
  }

  function checkWest(x, y) {
    if (typeof(currentArray[x]) == 'undefined' || typeof(currentArray[x][y - 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x][y - 1];
    return point === 1 ? 1 : 0;
  }

  function checkNorthWest(x, y) {
    if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y - 1]) == 'undefined'){
      return 0;
    }
    var point = currentArray[x + 1][y - 1];
    return point === 1 ? 1 : 0;
  }

});