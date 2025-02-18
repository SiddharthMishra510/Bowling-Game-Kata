import { Frame } from './Frame';

export class Frames {
  private readonly frameArray: Frame[];
  private readonly lastFrameIndex: number = 9;

  public constructor() {
    this.frameArray = [];
    this.frameArray.push(new Frame());
  }

  public score(): number {
    let score = 0;

    this.frameArray.forEach((frame) => {
      score += frame.getScore();
      if (!this.isFirstFrame(frame)) {
        let frameBefore = this.frameBefore(frame);
        if (frameBefore.isSpare() && this.isNotBonusFrame(frame)) {
          score += frame.getFirstRoll();
        }
        if (frameBefore.isStrike() && this.isNotBonusFrame(frame)) {
          score += frame.getScore();
        }
      }
    });

    return score;
  }

  public registerRoll(pinsKnocked: number): void {
    let currentFrame = this.frameArray[this.frameArray.length - 1];
    if (currentFrame.isComplete()) {
      if (this.isLastFrame(currentFrame) && !currentFrame.isStrike() && !currentFrame.isSpare()) {
        throw new Error('Game over. Cannot roll more than 20 times.');
      }
      let newFrame = new Frame();
      newFrame.addRoll(pinsKnocked);
      this.frameArray.push(newFrame);
    } else {
      currentFrame.addRoll(pinsKnocked);
    }
  }

  private isFirstFrame(frame: Frame) {
    return this.frameArray.indexOf(frame) === 0;
  }

  private frameBefore(frame: Frame) {
    return this.frameArray[this.frameArray.indexOf(frame) - 1];
  }

  private isNotBonusFrame(frame: Frame) {
    return this.frameArray.indexOf(frame) !== (this.lastFrameIndex + 1);
  }

  private isLastFrame(frame: Frame) {
    return this.frameArray.indexOf(frame) === this.lastFrameIndex;
  }
}
