import { I_Position } from "@/interfaces/I_Play";
import { RIGHT, M2, O1, SETTER, O2, M1 } from "../PlayerRoles";
import * as positions from  "../Positions";

export const ROTATION_5_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.RIGHT_BASE_POSITION,
    },
    {
      player: M2,
      position: positions.BMIDDLE_BASE_POSITION,
    },
    {
      player: O1,
      position: positions.FPOWER_BASE_POSITION,
    },
    {
      player: SETTER,
      position: positions.STACK_SLIGHTLY_LEFT,
    },
    {
      player: O2,
      position: positions.SERVING_POSITION,
    },
    {
      player: M1,
      position: positions.FMIDDLE_BASE_POSITION,
    },
  ],
];

export const ROTATION_5_RECEIVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.POSITION_BACK_MIDDLE.add({ X: 25, Y: 75 }),
    },
    {
      player: M2,
      position: positions.POSITION_BACK_MIDDLE,
    },
    {
      player: O1,
      position: positions.POSITION_BACK_LEFT,
    },
    {
      player: SETTER,
      position: positions.POSITION_FRONT_MIDDLE,
    },
    {
      player: O2,
      position: positions.POSITION_1,
    },
    {
      player: M1,
      position: positions.POSITION_FRONT_RIGHT,
    },
    {
      player: SETTER,
      position: positions.POSITION_FRONT_RIGHT.add({ X: -50, Y: -25 }),
    },
  ],
];

export const ROTATION_5_RECEIVE_ALT_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.POSITION_BACK_MIDDLE.add({ X: 25, Y: 75 }),
    },
    {
      player: M2,
      position: positions.POSITION_BACK_LEFT,
    },
    {
      player: O1,
      position: positions.POSITION_FRONT_LEFT,
    },
    {
      player: O2,
      position: positions.POSITION_1,
    },
    {
      player: M1,
      position: positions.POSITION_FRONT_RIGHT,
    },
    {
      player: SETTER,
      position: positions.POSITION_FRONT_RIGHT.add({ X: -50, Y: -25 }),
    },
  ],
];
