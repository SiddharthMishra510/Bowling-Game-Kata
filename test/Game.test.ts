import { Game } from '../src/Game';

describe('Game class', () => {
  test('should return score as 0 initially', () => {
    const game = new Game();
    expect(game.score()).toBe(0);
  });

  test('should return score as 1 if a single pin is knocked in a frame', () => {
    const game = new Game();
    game.roll(1);
    game.roll(0);
    expect(game.score()).toBe(1);
  });

  test('should throw exception on 21st roll if no bonuses', () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(() => game.roll(0)).toThrow('Game over. Cannot roll more than 20 times.');
  });

  test('should apply bonus for spare', () => {
    const game = new Game();
    game.roll(3);
    game.roll(7);
    game.roll(4);
    expect(game.score()).toBe(18);
  });

  test('should apply bonus for strike', () => {
    const game = new Game();
    game.roll(10);
    game.roll(2);
    game.roll(2);
    expect(game.score()).toBe(18);
  });

  test('should allow for extra frame if 10th frame is a strike', () => {
    const game = new Game();
    for (let i = 0; i < 18; i++) {
      game.roll(0);
    }
    game.roll(10);
    game.roll(3);
    game.roll(2);
    expect(game.score()).toBe(15);
  });

  test('should allow for extra roll if 10th frame is a spare', () => {
    const game = new Game();
    for (let i = 0; i < 18; i++) {
      game.roll(0);
    }
    game.roll(8);
    game.roll(2);
    game.roll(3);
    expect(game.score()).toBe(13);
  });

  test('should return score of 0 for all gutter balls', () => {
    const game = new Game();
    
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.score()).toBe(0);
  });
});
