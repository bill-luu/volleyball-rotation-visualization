import { RIGHT, SETTER } from "@/data/Plays"
import { BMIDDLE_BASE_POSITION, BPOWER_BASE_POSITION, FMIDDLE_BASE_POSITION, FPOWER_BASE_POSITION, RIGHT_BASE_POSITION, SETTER_BASE_POSITION } from "@/data/Positions"
import { I_Coordinate } from "./I_Coordinate"
// Play will contain:
// transitions - in each transition will be where each the player should be

export interface I_Position {
    player: string,
    position: I_Coordinate,
}

export interface I_Play {
    name: string,
    transitions: I_Position[][]
}
const oppositeMap = new Map<string, string>([
  ["M1", "M2"],
  ["O1", "O2"],
  ["M2", "M1"],
  ["O2", "O1"],
  ["S", "R"],
  ["R", "S"],
]);
// FrontRow: M1, S1, O1
// Backrow: M2, O2, R

// As a power, I just need to know if I am front or back row
// As well as where I start
// A play should dictate where I start, and where I should go
export class Play implements I_Play {
    name: string
    transitions: I_Position[][]

    frontRow: string[]

    constructor(
        name: string,
        frontRow: string[],
        transitions: I_Position[][]) {
            this.name = name
            this.frontRow = frontRow
            this.transitions = transitions
            this.transitions.push(this.getBasePositions())
    }

    private getBasePositions(): I_Position[] {
        const ret: I_Position[] = []

        this.frontRow.forEach((player) => {
            if(!oppositeMap.has(player)) {
                console.error(player, " has no opposite");
            }
            let fPosition: I_Coordinate | undefined
            let bPosition: I_Coordinate | undefined

            if(player.includes('O')) {
                fPosition = FPOWER_BASE_POSITION;
                bPosition = BPOWER_BASE_POSITION
            } else if(player.includes('M')) {
                fPosition = FMIDDLE_BASE_POSITION;
                bPosition = BMIDDLE_BASE_POSITION;
            } else if(player === 'S' || player === 'R') {
                fPosition = SETTER_BASE_POSITION;
                bPosition = RIGHT_BASE_POSITION;
            } else {
                console.error(player, "has no position")   
            }

            if (!!fPosition && !!bPosition) {
                ret.push({
                  player: player,
                  position: fPosition,
                });
              ret.push({
                  player: oppositeMap.get(player)!,
                  position: bPosition,
              });
            }
        })

        // Powers
        return ret;
    }

}