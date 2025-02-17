export class Game {
    currentScore: number = 0;

    public score(): number {
        return this.currentScore;
    }

    roll(knockedPinsCount: number) {
        this.currentScore += knockedPinsCount;
    }
}