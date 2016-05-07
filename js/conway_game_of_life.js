// Calculate number of cells to be displayed
// Set random alive cells in a 2D array
// Perform logic to figure out what the next set of alive cells should be
// Set next array to current array to display
// continuously perform this logic

var width = 10;
var height = 10;
var gameOn = true;


var startingArray = new Array(width).fill(0);
for (var i = 0; i < startingArray.length; i++) {
  startingArray[i] = new Array(width).fill(0);
}

var nextArray = new Array(width).fill(0);
for (var i = 0; i < nextArray.length; i++) {
  nextArray[i] = new Array(width).fill(0);
}


// console.log(startingArray);

currentArray = startingArray;
// currentArray[0][1] = 1;
currentArray[1][4] = 1;
currentArray[2][4] = 1;
currentArray[3][4] = 1;
// currentArray[4][1] = 1;
var sleep = require('sleep');
while (gameOn){
  sleep.sleep(1);
  var counter = 0;
  for (var i = 0; i < currentArray.length; i++){
    var innerArray = currentArray[i];
    for (var j = 0; j < innerArray.length; j++){
      // console.log(innerArray[j]);
      // console.log(updatePoint(i, j, innerArray[j]));
      newAliveOrDead = updatePoint(i, j, innerArray[j]);
      nextArray[i][j] = newAliveOrDead;
      counter += newAliveOrDead;
      
      //Method to updatePointAlive() || updatePointDead();
    }

  }

  console.log(nextArray);
  currentArray = nextArray;
  var nextArray = new Array(width).fill(0);
  for (var i = 0; i < nextArray.length; i++) {
    nextArray[i] = new Array(width).fill(0);
  }
  checkGameOn(counter);
}


function checkGameOn(counter){
  if (counter === 0){
    gameOn = false;
  }
}

function updatePoint(x, y, status){

// update neighborArray with the points.  count total number in that array
//return a 1 or 0 for that point and let the loop above update the point
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
  // console.log(neighborAliveCount);
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
  if (neighborAliveCount === 3){
    return 1;
  } else {
    return 0;
  }
}

function add(num1, num2){
  return num1 + num2;
}



function checkNorth(x, y) {
  if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x + 1][y];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkNorthEast(x, y) {
  if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y + 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x + 1][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}


function checkEast(x, y) {
  if (typeof(currentArray[x]) == 'undefined' || typeof(currentArray[x][y + 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouthEast(x, y) {
  if (typeof(currentArray[x - 1]) == 'undefined' || typeof(currentArray[x - 1][y + 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x - 1][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouth(x, y) {
  if (typeof(currentArray[x - 1]) == 'undefined'  || typeof(currentArray[x - 1][y]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x - 1][y];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouthWest(x, y) {
  if (typeof(currentArray[x - 1]) == 'undefined' || typeof(currentArray[x - 1][y - 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x - 1][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkWest(x, y) {
  if (typeof(currentArray[x]) == 'undefined' || typeof(currentArray[x][y - 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkNorthWest(x, y) {
  if (typeof(currentArray[x + 1]) == 'undefined' || typeof(currentArray[x + 1][y - 1]) == 'undefined'){
    return 0;
  }
  var point = currentArray[x + 1][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}









