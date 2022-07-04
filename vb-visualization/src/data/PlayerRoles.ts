export const SETTER = "S";
export const M2 = "M2";
export const O2 = "O2";
export const RIGHT = "R";
export const M1 = "M1";
export const O1 = "O1";

export const oppositeMap = new Map<string, string>([
  [M1, M2],
  [O1, O2],
  [M2, M1],
  [O2, O1],
  [SETTER, RIGHT],
  [RIGHT, SETTER],
]);

export const isPower = (player: string) => (player.includes("O"))
export const isMiddle = (player: string) => player.includes("M");