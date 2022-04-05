export interface I_Coordinate {
    X: number,
    Y: number,
}

export class Coordinate implements I_Coordinate {
    X: number
    Y: number
    // _coord: I_Coordinate
    constructor(X: number, Y: number) {
        this.X = X;
        this.Y = Y
    }

    add(other: I_Coordinate): I_Coordinate {

        return {
          X: this.X + other.X,
          Y: this.Y + other.Y,
        };
    }
}