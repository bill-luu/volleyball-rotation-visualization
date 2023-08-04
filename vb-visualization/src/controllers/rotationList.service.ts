import { I_RotationService, RotationService } from "./rotation.service";

import { I_Play, I_Position } from "@/interfaces/I_Play";
import { I_Rotation } from "@/interfaces/I_Rotation";

export interface I_RotationList {
    getRotation: (index:number) => I_RotationService;
}

export class RotationList implements I_RotationList{
    private rotationIndex: number
    private transitionIndex: number
    private rotationList: I_RotationService[];

    constructor(rotations: I_Rotation[]) {
        this.rotationList = []
        this.rotationIndex = 0
        this.transitionIndex = 0
        rotations.forEach(rotation => {
            this.rotationList.push(new RotationService(rotation))
        });
    }

    getRotation(index:number): I_RotationService {
        return this.rotationList[index]
    }

    currentRotation(): I_RotationService {
        return this.rotationList[this.rotationIndex]
    }

    nextRotation(): I_RotationService {
        this.rotationIndex++
        this.rotationIndex = this.rotationIndex % this.rotationList.length
        this.currentRotation().resetPlay();
        return this.currentRotation()
    }

    prevRotation(): I_RotationService {
        if (this.rotationIndex == 0) {
            this.rotationIndex = this.rotationList.length - 1
        } else {
            this.rotationIndex--
        }
        
        this.currentRotation().resetPlay();
        return this.currentRotation();
    }

    private isLastTransition(): boolean {
        return (
            this.transitionIndex ==
            this.currentRotation().getCurrentPlay().transitions.length
        );
    }

    private currentPlay() : I_Play {
        return this.currentRotation().getCurrentPlay();
    }

    nextPosition(): I_Position[]{
        this.transitionIndex++
        if (this.isLastTransition()) {
            if (this.currentRotation().isLastPlay()) {
                this.nextRotation();
            } else {
                this.currentRotation().nextPlay()
            }
            this.transitionIndex = 0
        }

       return this.currentPlay().transitions[this.transitionIndex];
    }

    prevPosition(): I_Position[] {
        this.transitionIndex--
        if (this.transitionIndex < 0) {
            if (this.currentRotation().isFirstPlay()) {
                this.prevRotation();
            } else {
                this.currentRotation().prevPlay()
            }
            this.transitionIndex = 0;
        }

        return this.currentPlay().transitions[this.transitionIndex];
    }

}