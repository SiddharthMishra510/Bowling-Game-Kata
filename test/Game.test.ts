import { Game } from '../src/Game';

describe('Game class', () => {
    test('should return score as 0 initially', () => {
        const game = new Game();
        expect(game.score()).toBe(0);
    });
});

describe('Game class', () => {
    test('should return score as 1 if a single pin is knocked in a frame', () => {
        const game = new Game();
        game.roll(1);
        game.roll(0);
        expect(game.score()).toBe(1);
    });
});