import { I_Coordinate } from "./I_Coordinate"
// Play will contain:
// transitions - in each transition will be where each the player should be

export interface I_Position {
    player: string,
    position: I_Coordinate,
}

export interface I_Play {
    transitions: I_Position[][]
}