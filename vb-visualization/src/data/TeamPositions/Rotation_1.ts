import { I_Position } from "@/interfaces/I_Play";
import { SETTER, M1, M2, RIGHT, O1, O2 } from "../PlayerRoles";
import { SERVING_POSITION, BMIDDLE_BASE_POSITION, FMIDDLE_BASE_POSITION, STACK_SLIGHTLY_LEFT, STACK_SLIGHTLY_RIGHT, BPOWER_BASE_POSITION, POSITION_1, POSITION_4, POSITION_2, RIGHT_BASE_POSITION } from "../Positions";

export const ROTATION_1_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: SETTER,
      position: SERVING_POSITION,
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
      position: STACK_SLIGHTLY_LEFT,
    },
    {
      player: O1,
      position: STACK_SLIGHTLY_RIGHT,
    },
    {
      player: O2,
      position: BPOWER_BASE_POSITION,
    },
  ],
];

export const ROTATION_1_RECEIVE_POSITIONS: I_Position[][] = [
  [
    {
      player: SETTER,
      position: POSITION_1.add({
        X: 50,
        Y: 50,
      }),
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
      position: POSITION_4,
    },
    {
      player: O1,
      position: POSITION_1,
    },
    {
      player: O2,
      position: BPOWER_BASE_POSITION,
    },
  ],
];

export const ROTATION_1_RECEIVE_ALT_POSITIONS: I_Position[][] = [
  [
    {
      player: SETTER,
      position: POSITION_2,
    },
    {
      player: M1,
      position: RIGHT_BASE_POSITION,
    },
    {
      player: M2,
      position: FMIDDLE_BASE_POSITION,
    },
    {
      player: RIGHT,
      position: BPOWER_BASE_POSITION,
    },
    {
      player: O1,
      position: POSITION_2.add({
        X: -50,
        Y: -50,
      }),
    },
    {
      player: O2,
      position: BMIDDLE_BASE_POSITION,
    },
  ],
];
