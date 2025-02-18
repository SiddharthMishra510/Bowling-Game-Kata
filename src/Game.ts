import {Frames} from "./Frames";

export class Game {
    frames: Frames = new Frames();

    public score(): number {
       return this.frames.score();
    }

    public roll(knockedPins: number) {
        this.frames.registerRoll(knockedPins);
    }
}