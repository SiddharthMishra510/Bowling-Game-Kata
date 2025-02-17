export class Game {
    currentScore: number = 0;
    currentRoll: number = 0;
    currentFrame: number = 0;

    readonly maxFrames: number = 10;
    readonly rollsInFrame: number = 2;

    public score(): number {
        return this.currentScore;
    }

    roll(knockedPinsCount: number) {
        if (this.currentFrame >= this.maxFrames) {
            throw new Error('Game over. Cannot roll more than 20 times.');
        }

        this.currentScore += knockedPinsCount;
        this.currentRoll++;

        if (this.currentRoll === this.rollsInFrame) {
            this.currentFrame++;
            this.currentRoll = 0;
        }
    }
}