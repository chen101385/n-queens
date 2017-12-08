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
  var board = new Board({n: n});

  var recurse = function(row, board) {
    // if there are no more rows to check
    if (row === n) {
      // add to solution
      return board.rows();
    }

    // iterate over all possible spaces
    for (var i = 0; i < n; i++) {
      // place a rook
      board.togglePiece(row, i);
      // check if board passes conflict test
      if (!board.hasAnyRooksConflicts()) {
        // recurse with new state of board
        return recurse(row + 1, board);
      }
      // unplace rook
      board.togglePiece(row, i);
    }
  };

  return recurse(0, board);
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var recurse = function(row, board) {
    // if there are no more rows to check
    if (row === n) {
      // add to solution
      solutionCount++;
      // stop
      return;
    }

    // iterate over all possible spaces
    for (var i = 0; i < n; i++) {
      // place a rook
      board.togglePiece(row, i);
      // check if board passes conflict test
      if (!board.hasAnyRooksConflicts()) {
        // recurse with new state of board
        recurse(row + 1, board);
      }
      // unplace rook
      board.togglePiece(row, i);
    }
  };

  recurse(0, board);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution;

  var recurse = function(row, board) {
    // if there are no more rows to check
    // debugger;
    if (row === n) {
      // add to solution
      solution = board.rows();
    }

    // iterate over all possible spaces
    for (var i = 0; i < n; i++) {
      // place a rook
      board.togglePiece(row, i);
      // check if board passes conflict test
      if (!board.hasAnyQueensConflicts()) {
        // recurse with new state of board
        recurse(row + 1, board);
      }
      // unplace rook
      board.togglePiece(row, i);
    }
  };
  recurse(0, board);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
 
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var recurse = function(row, board) {
    // if there are no more rows to check
    if (row === n) {
      // add to solution
      solutionCount++;
      // stops the function
      return;
    }

    // iterate over all possible spaces
    for (var i = 0; i < n; i++) {
      // place a rook
      board.togglePiece(row, i);
      // check if board passes conflict test
      if (!board.hasAnyQueensConflicts()) {
        // recurse with new state of board
        recurse(row + 1, board);
      }
      // unplace rook
      board.togglePiece(row, i);
    }
  };

  recurse(0, board);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
