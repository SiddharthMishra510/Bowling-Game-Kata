class frame {
    private firstRoll: number | undefined = undefined;
    private secondRoll: number | undefined = undefined;

    public addRoll(roll: number) {
        if(this.firstRoll == undefined) {
            this.firstRoll = roll;
        }
        else
        {
            this.secondRoll = roll;
        }
    }

    public getScore()
    {
        if(this.firstRoll == undefined) {
            return 0;
        }
        else if(this.secondRoll == undefined)
        {
            return this.firstRoll;
        }
        else{
            return this.firstRoll + this.secondRoll;
        }
    }

    public isFull() {
        return this.firstRoll != undefined && this.secondRoll != undefined;
    }

    public isSpare() {
        if(this.isFull())
        {
            // @ts-ignore
            return this.firstRoll + this.secondRoll === 10;
        }
        else
        {
            return false;
        }
    }

    getFirstRoll() {
        if(this.firstRoll == undefined) {
            return 0;
        }
        else{
            return this.firstRoll;
        }
    }
}

class framesList {
    frames: frame[] = new Array(10).fill(null).map(() => new frame());
    currentIndex: number = 0;

    public score(): number {
        let score = 0;
        for (let i = 0; i < this.frames.length; i++) {
            score += this.frames[i].getScore();
            if(i > 0)
            {
                if(this.frames[i-1].isSpare())
                {
                    score += this.frames[i].getFirstRoll();
                }
            }
        }
        return score;
    }

    registerRoll(knockedPins: number) {
        let currentFrame = this.frames[this.currentIndex];
        if(currentFrame.isFull()) {
            this.currentIndex++;
            currentFrame = this.frames[this.currentIndex];
        }

        if(this.currentIndex >= this.frames.length)
        {
            throw new Error('Game over. Cannot roll more than 20 times.');
        }
        currentFrame.addRoll(knockedPins);
    }
}

export class Game {
    frames: framesList = new framesList();

    public score(): number {
       return this.frames.score();
    }

    roll(knockedPins: number) {
        this.frames.registerRoll(knockedPins);
    }
}