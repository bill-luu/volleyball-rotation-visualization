import {
  isMiddle,
  isPower,
  oppositeMap,
  RIGHT,
  SETTER,
} from "@/data/PlayerRoles";
import {
  BMIDDLE_BASE_POSITION,
  BPOWER_BASE_POSITION,
  FMIDDLE_BASE_POSITION,
  FPOWER_BASE_POSITION,
  RIGHT_BASE_POSITION,
  SETTER_BASE_POSITION,
} from "@/data/Positions";
import { I_Coordinate } from "./I_Coordinate";

export interface I_Position {
  player: string;
  position: I_Coordinate;
}

// Play will contain:
// transitions - in each transition will be where each the player should be
export interface I_Play {
  name: string;
  transitions: I_Position[][];
}

interface oppositePlayers {
  player: I_Coordinate;
  opposite: I_Coordinate;
}

// As a power, I just need to know if I am front or back row
// As well as where I start
// A play should dictate where I start, and where I should go
export class Play implements I_Play {
  name: string;
  transitions: I_Position[][];

  frontRow: string[];

  constructor(name: string, frontRow: string[], transitions: I_Position[][]) {
    this.name = name;
    this.frontRow = frontRow;
    this.transitions = transitions;
    this.transitions.push(this.getBasePositions());
  }

  private getPositionForPlayerAndOpposite(
    player: string
  ): oppositePlayers | null {
    const oppositePositions: oppositePlayers = {
      player: { X: 0, Y: 0 },
      opposite: { X: 0, Y: 0 },
    };
    if (isPower(player)) {
      oppositePositions.player = FPOWER_BASE_POSITION;
      oppositePositions.opposite = BPOWER_BASE_POSITION;
    } else if (isMiddle(player)) {
      oppositePositions.player = FMIDDLE_BASE_POSITION;
      oppositePositions.opposite = BMIDDLE_BASE_POSITION;
    } else if (player === SETTER || player === RIGHT) {
      oppositePositions.player = SETTER_BASE_POSITION;
      oppositePositions.opposite = RIGHT_BASE_POSITION;
    } else {
      console.error(player, " has no position");
      return null;
    }

    return oppositePositions;
  }

  private getBasePositions(): I_Position[] {
    const ret: I_Position[] = [];

    this.frontRow.forEach((player) => {
      if (!oppositeMap.has(player)) {
        console.error(player, " has no opposite");
      }
      const oppositePlayers = this.getPositionForPlayerAndOpposite(player);

      if (oppositePlayers) {
        ret.push({
          player: player,
          position: oppositePlayers.player,
        });
        ret.push({
          player: oppositeMap.get(player)!,
          position: oppositePlayers.opposite,
        });
      }
    });

    // Powers
    return ret;
  }
}
