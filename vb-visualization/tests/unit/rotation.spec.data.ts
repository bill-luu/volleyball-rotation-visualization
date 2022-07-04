import { I_Play } from "@/interfaces/I_Play";
import { I_Rotation, Rotation } from "@/interfaces/I_Rotation";

export const EXPECTED_PLAY: I_Play = {
  name: "Service",
  transitions: [
    [
      {
        player: "Setter",
        position: {
          X: 0,
          Y: 0,
        },
      },
    ],
  ],
};

export const TEST_ROTATION: I_Rotation = {
  name: "Test Rotation",
  serve: {
    name: "Service",
    transitions: [
      [
        {
          player: "Setter",
          position: {
            X: 0,
            Y: 0,
          },
        },
      ],
    ],
  },
  receive: {
    name: "Receive",
    transitions: [
      [
        {
          player: "Setter",
          position: {
            X: 0,
            Y: 0,
          },
        },
      ],
    ],
  },
};


export const TEST_ROTATION_WITH_ALT: I_Rotation = {
  name: "Test Rotation With Alt",
  serve: {
    name: "Service",
    transitions: [
      [
        {
          player: "Setter",
          position: {
            X: 0,
            Y: 0,
          },
        },
      ],
    ],
  },
  receive: {
    name: "Receive",
    transitions: [
      [
        {
          player: "Setter",
          position: {
            X: 0,
            Y: 0,
          },
        },
      ],
    ],
  },
  alt: {
    name: "Receive",
    transitions: [
      [
        {
          player: "Setter",
          position: {
            X: 0,
            Y: 0,
          },
        },
      ],
    ],
  },
};

export const NEXT_PLAY_EXPECTED = {
  NO_ALT: {
    SERVE: {
      name: "Service",
      transitions: [
        [
          {
            player: "Setter",
            position: {
              X: 0,
              Y: 0,
            },
          },
        ],
      ],
    },
    RECEIVE: {
      name: "Receive",
      transitions: [
        [
          {
            player: "Setter",
            position: {
              X: 0,
              Y: 0,
            },
          },
        ],
      ],
    },
  },
  ALT: {
    SERVE: {
      name: "Service",
      transitions: [
        [
          {
            player: "Setter",
            position: {
              X: 0,
              Y: 0,
            },
          },
        ],
      ],
    },
    RECEIVE: {
      name: "Receive",
      transitions: [
        [
          {
            player: "Setter",
            position: {
              X: 0,
              Y: 0,
            },
          },
        ],
      ],
    },
    ALT: {
      name: "Receive",
      transitions: [
        [
          {
            player: "Setter",
            position: {
              X: 0,
              Y: 0,
            },
          },
        ],
      ],
    },
  },
};
