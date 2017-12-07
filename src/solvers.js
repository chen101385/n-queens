/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var passed = [];
  var failed = [];
  
  // create an empty n board
  var board = new Board({'n': 3});
  var row = board.get(0);
  var x, y;
  // place a rook at the top left box
  row[0] = 1;
  board.set(0, row);
  // cancel the x & y coordinates of rook #1
  x = 0, y = 0;
    // loop through all the remaining boxes by placing rook #2
  for (var i = 0; i < n; i++) {
    if (i !== x) {
      row = board.get(i);
      for (var j = 0; j < n; j++) {
        if (j !== y) {
          row[j] = 1;
        }
      }
    }
  }
    // for each iteration test against conflict function
    // add passing boards to a Pass container
    // add failing boards to Fail container
    // cancel the x & y coordinates of rook #2
  // for all passing boards place rook #3 in all available space using the Fail container for optimization
  // repeat until n rooks are placed
  // push passing boards to the solution
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
