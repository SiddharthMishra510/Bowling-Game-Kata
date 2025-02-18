import { Frame } from "./Frame";

export class Frames {
    frameArray: Frame[] = Array.from({ length: 10 }, () => new Frame());
    currentIndex: number = 0;

    public score(): number {
        let score = 0;

        this.frameArray.forEach((frame, index) => {
            score += frame.getScore();
            if (index > 0 && this.frameArray[index - 1].isSpare()) {
                score += frame.getFirstRoll();
            }
            if (index > 0 && this.frameArray[index - 1].isStrike()) {
                score += frame.getScore();
            }
        });

        return score;
    }

    public registerRoll(pinsKnocked: number): void {
        let currentFrame = this.frameArray[this.currentIndex];

        if (currentFrame.isComplete()) {
            this.currentIndex++;
            if (this.currentIndex >= this.frameArray.length) {
                throw new Error('Game over. Cannot roll more than 20 times.');
            }
            currentFrame = this.frameArray[this.currentIndex];
        }

        currentFrame.addRoll(pinsKnocked);
    }
}
