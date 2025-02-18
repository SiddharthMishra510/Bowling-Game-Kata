export class Frame {
  private firstRoll: number | undefined = undefined;
  private secondRoll: number | undefined = undefined;

  public addRoll(roll: number): void {
    if (this.firstRoll === undefined) {
      this.firstRoll = roll;
    } else if (this.secondRoll === undefined) {
      this.secondRoll = roll;
    } else {
      throw new Error('Cannot add more than two rolls to a frame.');
    }
  }

  public getScore(): number {
    return (this.firstRoll || 0) + (this.secondRoll || 0);
  }

  public isComplete(): boolean {
    return (this.firstRoll !== undefined && this.secondRoll !== undefined) || this.isStrike();
  }
  
  public isSpare(): boolean {
    return this.isComplete() && (this.firstRoll! + this.secondRoll! === 10);
  }

  public getFirstRoll(): number {
    return this.firstRoll ?? 0;
  }

  public isStrike(): boolean {
    return this.firstRoll !== undefined && this.firstRoll == 10;
  }
}
