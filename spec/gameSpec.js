var Game = require('../src/game.js').Game;

describe("Game", function() {

  it("has two players", function() {
    players = ['player 1', 'player 2'];
    game = new Game(players);
    expect(game.players.length).toEqual(2);
  });
});
