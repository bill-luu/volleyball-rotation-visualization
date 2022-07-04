import { I_Position } from "@/interfaces/I_Play";
import { M2, O1, SETTER, M1, O2, RIGHT } from "../PlayerRoles";
import { SERVING_POSITION, POSITION_6, FMIDDLE_BASE_POSITION, POSITION_2, POSITION_1, POSITION_3, POSITION_4, POSITION_5, MIDDLE_ATTACK_POSITION, POWER_ATTACK_POSITION, RIGHT_ATTACK_POSITION } from "../Positions";

export const ROTATION_3_SERVE_POSITIONS: I_Position[][] = [
  [
    {
      player: M2,
      position: SERVING_POSITION,
    },
    {
      player: O1,
      position: POSITION_6,
    },
    {
      player: SETTER,
      position: POSITION_6.add({ X: -10, Y: -50 }),
    },
    {
      player: M1,
      position: FMIDDLE_BASE_POSITION,
    },
    {
      player: O2,
      position: FMIDDLE_BASE_POSITION.add({ X: 50, Y: 50 }),
    },
    {
      player: RIGHT,
      position: POSITION_2,
    },
  ],
];

export const ROTATION_3_RECEIVE_POSITIONS: I_Position[][] = [
  [
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
      position: POSITION_3.add({ X: 50, Y: -50 }),
    },
    {
      player: M1,
      position: POSITION_4,
    },
    {
      player: O2,
      position: POSITION_5,
    },
    {
      player: RIGHT,
      position: POSITION_2,
    },
  ],
  [
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
      position: POSITION_3.add({ X: 50, Y: -50 }),
    },
    {
      player: M1,
      position: MIDDLE_ATTACK_POSITION,
    },
    {
      player: O2,
      position: POWER_ATTACK_POSITION,
    },
    {
      player: RIGHT,
      position: RIGHT_ATTACK_POSITION,
    },
  ],
];
