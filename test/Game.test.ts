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
});
