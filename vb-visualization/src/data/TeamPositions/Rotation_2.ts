import { I_Position } from "@/interfaces/I_Play";
import { SETTER, M1, M2, RIGHT, O1, O2 } from "../PlayerRoles";
import { RIGHT_BASE_POSITION, BMIDDLE_BASE_POSITION, FMIDDLE_BASE_POSITION, SERVING_POSITION, FPOWER_BASE_POSITION, POSITION_2, POSITION_1, POSITION_5 } from "../Positions";

export const ROTATION_2_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: SETTER,
      position: RIGHT_BASE_POSITION,
    },
    {
      player: M1,
      position: BMIDDLE_BASE_POSITION,
    },
    {
      player: M2,
      position: FMIDDLE_BASE_POSITION,
    },
    {
      player: RIGHT,
      position: FMIDDLE_BASE_POSITION.add({
        X: -20,
        Y: 50,
      }),
    },
    {
      player: O1,
      position: SERVING_POSITION,
    },
    {
      player: O2,
      position: FPOWER_BASE_POSITION,
    },
  ],
];

export const ROTATION_2_RECEIVE_POSITIONS: I_Position[][] = [
  [
    {
      player: SETTER,
      position: POSITION_2.add({
        X: -50,
        Y: 0,
      }),
    },
    {
      player: M1,
      position: BMIDDLE_BASE_POSITION,
    },
    {
      player: M2,
      position: POSITION_2.add({
        X: 50,
        Y: 40,
      }),
    },
    {
      player: RIGHT,
      position: POSITION_2.add({
        X: 0,
        Y: -50,
      }),
    },
    {
      player: O1,
      position: POSITION_1,
    },
    {
      player: O2,
      position: POSITION_5,
    },
  ],
];
