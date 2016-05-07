// Calculate number of cells to be displayed
// Set random alive cells in a 2D array
// Perform logic to figure out what the next set of alive cells should be
// Set next array to current array to display
// continuously perform this logic

var width = 10;
var height = 10;

var startingArray = new Array(width);
for (var i = 0; i < startingArray.length; i++) {
  startingArray[i] = new Array(height);
}

var nextArray = new Array(width);
for (var i = 0; i < nextArray.length; i++) {
  nextArray[i] = new Array(height);
}


// console.log(startingArray);

currentArray = startingArray;
currentArray[0][1] = 1;
console.log(currentArray);


for (var i = 0; i < currentArray.length; i++){
  var innerArray = currentArray[i];
  for (var j = 0; j < innerArray.length; j++){
    // console.log(innerArray[j]);
    //Method called checkPoint(innerArray, j, innerArray[j]);
    //Method to updatePointAlive() || updatePointDead();
  }

}

neighborArray = [];

function checkPoint(x, y, status){

// update neighborArray with the points.  count total number in that array
//return a 1 or 0 for that point and let the loop above update the point


  neighborArray[0] = checkNorth();
  neighborArray[1] = checkNorthEast();
  neighborArray[2] = checkEast();
  neighborArray[3] = checkSouthEast();
  neighborArray[4] = checkSouth();
  neighborArray[5] = checkSouthWest();
  neighborArray[6] = checkWest();
  neighborArray[7] = checkNorthWest();
  neighborAliveCount = neighborArray.reduce(add, 0);
  return checkAgainstRules(status, neighborAliveCount);

}

function checkAgainstRules(status, neighborAliveCount){
  if (status === 1){
    checkLiveRules(neighborAliveCount);
  } else {
    checkDeadRules(neighborAliveCount);
  }
}

function checkLiveRules(neighborAliveCount){

}

function checkDeadRules(neighborAliveCount){
  if (neighborAliveCount === 3){
    return 1;
  } else {
    return 0;
  }
}

function add(num1, num2){
  return a + b;
}



function checkNorth(x, y) {
  var point = currentArray[x + 1][y];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkNorthEast(x, y) {
  var point = currentArray[x + 1][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}


function checkEast(x, y) {
  var point = currentArray[x][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouthEast(x, y) {
  var point = currentArray[x - 1][y + 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouth(x, y) {
  var point = currentArray[x - 1][y];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkSouthWest(x, y) {
  var point = currentArray[x - 1][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkWest(x, y) {
  var point = currentArray[x][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}

function checkNorthWest(x, y) {
  var point = currentArray[x + 1][y - 1];
  if (point === 1) {
    return 1;
  } else {
    return 0;
  }
}









