export class Game {
    currentScore: number = 0;
    currentRoll: number = 0;
    currentFrame: number = 0;

    public score(): number {
        return this.currentScore;
    }

    roll(knockedPinsCount: number) {
        if (this.currentFrame >= 10) {
            throw new Error('Game over. Cannot roll more than 20 times.');
        }

        this.currentScore += knockedPinsCount;
        this.currentRoll++;

        if (this.currentRoll === 2) {
            this.currentFrame++;
            this.currentRoll = 0;
        }
    }
}