import { I_Play, Play } from "./I_Play";

export interface I_Rotation {
  name: string;
  serve: I_Play;
  receive: I_Play;
  alt?: I_Play;
}

export class Rotation implements I_Rotation {
    name:string;
    serve: Play;
    receive: Play;
    alt: Play | undefined;

    constructor(
        name:string,
        serve: Play,
        receive: Play,
        alt?: Play
    ) {
        this.name = name
        this.serve = serve
        this.receive = receive
        if(alt) {
            this.alt = alt
        }
    }
}