import { Coordinate } from "@/interfaces/I_Coordinate";
import { I_Play, I_Position, Play } from "../interfaces/I_Play";
import {
  ATTACK_LINE,
  BMIDDLE_BASE_POSITION,
  BPOWER_BASE_POSITION,
  FMIDDLE_BASE_POSITION,
  FPOWER_BASE_POSITION,
  POSITION_1,
  POSITION_2,
  POSITION_3,
  POSITION_4,
  POSITION_5,
  POSITION_6,
  RIGHT_BASE_POSITION,
  SERVING_POSITION,
  SETTER_BASE_POSITION,
} from "./Positions";

export const SETTER = "S";
export const M2 = "M2";
export const O2 = "O2";
export const RIGHT = "R";
export const M1 = "M1";
export const O1 = "O1";

export const BASE_POSITION: I_Position[] = [
  {
    player: SETTER,
    position: POSITION_2,
  },
  {
    player: M2,
    position: POSITION_3,
  },
  {
    player: O2,
    position: POSITION_4,
  },
  {
    player: RIGHT,
    position: POSITION_1,
  },
  {
    player: M1,
    position: POSITION_6,
  },
  {
    player: O1,
    position: POSITION_5,
  },
];

export const BASE_POSITION_SETTER_FRONT: I_Position[] = [
  {
    player: SETTER,
    position: SETTER_BASE_POSITION,
  },
  {
    player: M2,
    position: FMIDDLE_BASE_POSITION,
  },
  {
    player: O2,
    position: FPOWER_BASE_POSITION,
  },
  {
    player: RIGHT,
    position: RIGHT_BASE_POSITION,
  },
  {
    player: M1,
    position: BMIDDLE_BASE_POSITION,
  },
  {
    player: O1,
    position: BPOWER_BASE_POSITION,
  },
];

export const GAME_START_SERVE: I_Play = new Play(
    "Game Start Serve",
    [ SETTER, M2, O2 ],
    [
        [
            {
                player: SETTER,
                position: SETTER_BASE_POSITION,
            },
            {
                player: M2,
                position: POSITION_3,
            },
            {
                player: O2,
                position: POSITION_4,
            },
            {
                player: RIGHT,
                position: {
                X: -70,
                Y: -220,
                },
            },
            {
                player: M1,
                position: POSITION_6,
            },
            {
                player: O1,
                position: SERVING_POSITION,
            },
        ],
    ]
)

export const GAME_START_RECEIVE: Play =  new Play(
    "Game Start Receive",
    [ SETTER, M2, O2 ],
    [
        [
            {
                player: M1,
                position: POSITION_6,
              },
              {
                player: O1,
                position: POSITION_1,
              },
              {
                player: O2,
                position: POSITION_5,
              },
              {
                player: SETTER,
                position: {
                  X: 120,
                  Y: -230,
                },
              },
              {
                player: RIGHT,
                position: {
                  X: 166,
                  Y: -275,
                },
              },
              {
                player: M2,
                position: {
                  X: 250,
                  Y: -250,
                },
              },
        ],
        [
          {
            player: M1,
            position: POSITION_6,
          },
          {
            player: O1,
            position: POSITION_1,
          },
          {
            player: O2,
            position: {
              X: -166,
              Y: ATTACK_LINE,
            },
          },
          {
            player: SETTER,
            position: SETTER_BASE_POSITION,
          },
          {
            player: RIGHT,
            position: {
              X: 250,
              Y: ATTACK_LINE,
            },
          },
          {
            player: M2,
            position: {
              X: 20,
              Y: ATTACK_LINE,
            },
          },
        ],
    ]
)

export const ROTATION_2_SERVE: Play = new Play(
  "Rotation 2 - Serve",
  [RIGHT, M2, O1],
  [
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
        position: FMIDDLE_BASE_POSITION.add({
          X: -20,
          Y: 50,
        }),
      },
      {
        player: O1,
        position: FMIDDLE_BASE_POSITION.add({
          X: 50,
          Y: 70,
        }),
      },
      {
        player: O2,
        position: BPOWER_BASE_POSITION,
      },
    ],
  ]
);

export const ROTATION_2_RECEIVE: Play = new Play(
  "Rotation 2 - Receive",
  [RIGHT, M2, O1],
  [
    [
      {
        player: SETTER,
        position: POSITION_1.add({
            X:50,
            Y:50
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
  ]
);

export const ROTATION_2_RECEIVE_ALT: Play = new Play(
  "Rotation 2 - Receive (Alternative)",
  [RIGHT, M2, O1],
  [
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
  ]
);

export const ROTATION_3_SERVE: Play = new Play(
  "Rotation 3 - Serve",
  [RIGHT, M2, O2],
  [
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
        position: SERVING_POSITION
      },
      {
        player: O2,
        position: FPOWER_BASE_POSITION,
      },
    ],
  ]
);

export const ROTATION_3_RECEIVE: Play = new Play(
  "Rotation 3 - Receive",
  [RIGHT, M2, O2],
  [
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
            Y: 40
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
  ]
);