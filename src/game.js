(function(exports) {

  function Game(players, board) {
    this.players = players;
    this.board = board;
    this.currentPlayer = players[0];
  }
  // dont need to know there are two players, just need to have info about current player to play game

  Game.prototype.move = function(boardPosition) {
    this.board[boardPosition - 1] = this.currentPlayer.type;
    // need to check for winner after each move
  };

  Game.prototype.switchCurrentPlayer = function() {
    this.players.reverse();
    this.currentPlayer = players[0];
  };

  Game.prototype.currentPlayer = function() {
    return this.players[0];
  };

  exports.Game = Game;
  })(this);
