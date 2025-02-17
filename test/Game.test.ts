import { Game } from '../src/Game';

describe('Game class', () => {
    test('should return score as 0 initially', () => {
        const game = new Game();
        expect(game.score()).toBe(0);
    });
});