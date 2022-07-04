import { I_Position } from "@/interfaces/I_Play";
import { RIGHT, M2, O1, SETTER, O2, M1 } from "../PlayerRoles";
import { SERVING_POSITION, BMIDDLE_BASE_POSITION, BPOWER_BASE_POSITION, STACK_SLIGHTLY_LEFT, STACK_SLIGHTLY_RIGHT, FMIDDLE_BASE_POSITION, POSITION_1, POSITION_6, POSITION_5, POSITION_4 } from "../Positions";

export const ROTATION_4_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: SERVING_POSITION,
    },
    {
      player: M2,
      position: BMIDDLE_BASE_POSITION,
    },
    {
      player: O1,
      position: BPOWER_BASE_POSITION,
    },
    {
      player: SETTER,
      position: STACK_SLIGHTLY_LEFT,
    },
    {
      player: O2,
      position: STACK_SLIGHTLY_RIGHT,
    },
    {
      player: M1,
      position: FMIDDLE_BASE_POSITION,
    },
  ],
];

export const ROTATION_4_RECEIVE_POSITIONS: I_Position[][] = [
  [
    {
      player: RIGHT,
      position: SERVING_POSITION.add({ X: 0, Y: -75 }),
    },
    {
      player: M2,
      position: POSITION_1,
    },
    {
      player: O1,
      position: POSITION_6,
    },
    {
      player: SETTER,
      position: STACK_SLIGHTLY_LEFT,
    },
    {
      player: O2,
      position: POSITION_5,
    },
    {
      player: M1,
      position: POSITION_4.add({ X: -30, Y: 0 }),
    },
    {
      player: SETTER,
      position: POSITION_4.add({ X: -50, Y: -50 }),
    },
  ],
];

export const ROTATION_4_SERVE_ALT_POSITIONS: I_Position[][] = [
  [
    {
      player: M2,
      position: BMIDDLE_BASE_POSITION,
    },
    {
      player: RIGHT,
      position: POSITION_1,
    },
    {
      player: O1,
      position: POSITION_5,
    },
    {
      player: SETTER,
      position: STACK_SLIGHTLY_LEFT,
    },
    {
      player: O2,
      position: POSITION_4.add({ X: 0, Y: 50 }),
    },
    {
      player: M1,
      position: POSITION_4.add({ X: -30, Y: 0 }),
    },
    {
      player: SETTER,
      position: POSITION_4.add({ X: -50, Y: -50 }),
    },
  ],
];
