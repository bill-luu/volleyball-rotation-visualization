import { I_Position } from "@/interfaces/I_Play";
import { RIGHT, M2, O1, SETTER, O2, M1 } from "../PlayerRoles";
import * as positions from  "../Positions";

export const ROTATION_6_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.POSITION_BACK_MIDDLE.add({X:-25, Y:-25}),
    },
    {
      player: M2,
      position: positions.FMIDDLE_BASE_POSITION,
    },
    {
      player: O1,
      position: positions.POSITION_FRONT_MIDDLE.add({X:25, Y:50}),
    },
    {
      player: SETTER,
      position: positions.SETTER_BASE_POSITION,
    },
    {
      player: O2,
      position: positions.POSITION_BACK_MIDDLE.add({X:0, Y: 25}),
    },
    {
      player: M1,
      position: positions.SERVING_POSITION,
    },
  ],
];

export const ROTATION_6_RECEIVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.POSITION_BACK_MIDDLE.add({ X: -25, Y: 75 }),
    },
    {
      player: M2,
      position: positions.POSITION_FRONT_LEFT,
    },
    {
      player: O1,
      position: positions.POSITION_BACK_LEFT,
    },
    {
      player: SETTER,
      position: positions.SETTER_BASE_POSITION,
    },
    {
      player: O2,
      position: positions.POSITION_BACK_MIDDLE,
    },
    {
      player: M1,
      position: positions.POSITION_BACK_RIGHT,
    },
  ],
];

export const ROTATION_6_RECEIVE_ALT_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: positions.POSITION_BACK_LEFT,
    },
    {
      player: M2,
      position: positions.POSITION_FRONT_LEFT,
    },
    {
      player: O1,
      position: positions.POSITION_FRONT_LEFT.add({X: 0, Y: 50}),
    },
    {
      player: SETTER,
      position: positions.SETTER_BASE_POSITION,
    },
    {
      player: O2,
      position: positions.POSITION_BACK_MIDDLE,
    },
    {
      player: M1,
      position: positions.POSITION_BACK_RIGHT,
    },
  ],
];
