import { I_Play, I_Position } from "../interfaces/I_Play"

export const BASE_POSITION: I_Position[] = [
    {
        player: "setter",
        position: {
            X: 166,
            Y: 0
        }
    },
    {
        player: "fmiddle",
        position: {
            X: 0,
            Y: 0,
        }
    },
    {
        player: "fpower",
        position: {
            X: -166,
            Y: 0,
        }
    },
    {
        player: "right",
        position: {
            X: 166,
            Y: 0
        }
    },
    {
        player: "bmiddle",
        position: {
            X: 0,
            Y: 0,
        }
    },
    {
        player: "bpower",
        position: {
            X: -166,
            Y: 0,
        }
    },
]

export const GAME_START_SERVE: I_Play = {
    transitions: [
        [
            {
                player: "setter",
                position: {
                    X: 166,
                    Y: 0
                }
            },
            {
                player: "fmiddle",
                position: {
                    X: 0,
                    Y: 0,
                }
            },
            {
                player: "fpower",
                position: {
                    X: -166,
                    Y: 0,
                }
            },
            {
                player: "right",
                position: {
                    X: 0,
                    Y: -25
                }
            },
            {
                player: "bmiddle",
                position: {
                    X: 0,
                    Y: 25,
                }
            },
            {
                player: "bpower",
                position: {
                    X: 166,
                    Y: 100,
                }
            },
        ],
        BASE_POSITION
    ]
} 