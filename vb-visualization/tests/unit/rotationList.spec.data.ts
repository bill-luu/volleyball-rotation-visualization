import { I_Rotation } from "@/interfaces/I_Rotation";

export const TEST_ROTATION_1: I_Rotation = {
  name: "Rotation 1",
  serve: {
    name: "Serve",
    transitions: [
      [
        {
          player: "S",
          position: {
            X: 166,
            Y: 0,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "R",
          position: {
            X: -20,
            Y: -210,
          },
        },
        {
          player: "O1",
          position: {
            X: 50,
            Y: -190,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -180,
          },
        },
      ],
      [
        {
          player: "R",
          position: {
            X: 166,
            Y: -260,
          },
        },
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "O1",
          position: {
            X: -166,
            Y: -260,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -180,
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
          player: "S",
          position: {
            X: 216,
            Y: -75,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "R",
          position: {
            X: -166,
            Y: -250,
          },
        },
        {
          player: "O1",
          position: {
            X: 166,
            Y: -125,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -180,
          },
        },
      ],
      [
        {
          player: "R",
          position: {
            X: 166,
            Y: -260,
          },
        },
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "O1",
          position: {
            X: -166,
            Y: -260,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -180,
          },
        },
      ],
    ],
  },
  alt: {
    name: "Receive (Alternative)",
    transitions: [
      [
        {
          player: "S",
          position: {
            X: 166,
            Y: -250,
          },
        },
        {
          player: "M1",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "R",
          position: {
            X: -166,
            Y: -180,
          },
        },
        {
          player: "O1",
          position: {
            X: 116,
            Y: -300,
          },
        },
        {
          player: "O2",
          position: {
            X: 0,
            Y: -125,
          },
        },
      ],
      [
        {
          player: "R",
          position: {
            X: 166,
            Y: -260,
          },
        },
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "O1",
          position: {
            X: -166,
            Y: -260,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -180,
          },
        },
      ],
    ],
  },
};

export const TEST_ROTATION_2: I_Rotation = {
  name: "Rotation 2",
  serve: {
    name: "Serve",
    transitions: [
      [
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "R",
          position: {
            X: -20,
            Y: -210,
          },
        },
        {
          player: "O1",
          position: {
            X: 166,
            Y: 0,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -260,
          },
        },
      ],
      [
        {
          player: "R",
          position: {
            X: 166,
            Y: -260,
          },
        },
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -260,
          },
        },
        {
          player: "O1",
          position: {
            X: -166,
            Y: -180,
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
          player: "S",
          position: {
            X: 116,
            Y: -250,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "M2",
          position: {
            X: 216,
            Y: -210,
          },
        },
        {
          player: "R",
          position: {
            X: 166,
            Y: -300,
          },
        },
        {
          player: "O1",
          position: {
            X: 166,
            Y: -125,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -125,
          },
        },
      ],
      [
        {
          player: "R",
          position: {
            X: 166,
            Y: -260,
          },
        },
        {
          player: "S",
          position: {
            X: 166,
            Y: -180,
          },
        },
        {
          player: "M2",
          position: {
            X: 0,
            Y: -260,
          },
        },
        {
          player: "M1",
          position: {
            X: 0,
            Y: -125,
          },
        },
        {
          player: "O2",
          position: {
            X: -166,
            Y: -260,
          },
        },
        {
          player: "O1",
          position: {
            X: -166,
            Y: -180,
          },
        },
      ],
    ],
  },
};