import { I_Rotation } from "@/interfaces/I_Rotation";
import { I_RotationService, RotationService } from "./rotation.service";

export interface I_RotationList {
    getRotationService: (index:number) => I_RotationService;
}

export class RotationList implements I_RotationList{
    rotationList: I_RotationService[];
    constructor(rotations: I_Rotation[]) {
        this.rotationList = []
        rotations.forEach(rotation => {
            this.rotationList.push(new RotationService(rotation))
        });
    }

    getRotationService(index:number): I_RotationService {
        return this.rotationList[index]
    }
}