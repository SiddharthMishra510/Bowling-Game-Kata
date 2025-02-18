import { Frame } from './Frame';

export class Frames {
  frameArray: Frame[];
  private bonusFrameIndex: number = 10;

  public constructor() {
    this.frameArray = [];
    this.frameArray.push(new Frame());
  }

  public score(): number {
    let score = 0;

    this.frameArray.forEach((frame, index) => {
      score += frame.getScore();
      if (index > 0) {
        let previousFrame = this.frameArray[index - 1];
        if (previousFrame.isSpare()) {
          score += frame.getFirstRoll();
        }
        if (previousFrame.isStrike() && index !== this.bonusFrameIndex) {
          score += frame.getScore();
        }
      }
    });

    return score;
  }

  public registerRoll(pinsKnocked: number): void {
    let latestFrameIndex = this.frameArray.length - 1;
    let latestFrame = this.frameArray[latestFrameIndex];
    if (latestFrame.isComplete()) {
      if (latestFrameIndex === 9) {
        if (!latestFrame.isStrike()) {
          throw new Error('Game over. Cannot roll more than 20 times.');
        }
      }
      let newFrame = new Frame();
      newFrame.addRoll(pinsKnocked);
      this.frameArray.push(newFrame);
    } else {
      latestFrame.addRoll(pinsKnocked);
    }
  }
}
