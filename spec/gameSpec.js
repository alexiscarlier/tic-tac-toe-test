var Game = require('../src/game.js').Game;

describe("Game", function() {

  it("has two players", function() {
    players = ['player 1', 'player 2'];
    board = new Array(9);
    game = new Game(players, board);
    expect(game.board).toEqual(board);
    expect(game.currentPlayer).toEqual('player 1');
  });

  it("can switch between the players", function() {
    players = ['player 1', 'player 2'];
    board = new Array(9);
    game = new Game(players, board);
    game.switchCurrentPlayer();
    expect(game.currentPlayer).toEqual('player 2');
  });

});
