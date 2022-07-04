import { I_Play } from "@/interfaces/I_Play";
import { I_Rotation } from "@/interfaces/I_Rotation";

export interface I_RotationService {
  getCurrentPlay: () => I_Play;
  nextPlay: () => void;
  rotation: I_Rotation
}

export class RotationService implements I_RotationService {
  rotation: I_Rotation;
  private currentPlay: I_Play;

  constructor(rotation: I_Rotation) {
    this.rotation = rotation;
    this.currentPlay = this.rotation.serve;
  }

  getCurrentPlay(): I_Play {
    return this.currentPlay;
  }

  nextPlay(): void {
    switch (this.currentPlay) {
      case this.rotation.serve:
        this.currentPlay = this.rotation.receive;
        break;
      case this.rotation.receive:
        this.currentPlay = this.rotation.alt
          ? this.rotation.alt
          : this.rotation.serve;
        break;
      case this.rotation.alt:
        this.currentPlay = this.rotation.serve;
        break;
    }
  }
}
