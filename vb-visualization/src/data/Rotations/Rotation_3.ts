import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { RIGHT, M1, O2 } from "../PlayerRoles";
import {
  ROTATION_3_RECEIVE_POSITIONS,
  ROTATION_3_SERVE_POSITIONS,
  ROTATION_3_RECEIVE_ALT_POSITIONS
} from "../TeamPositions/Rotation_3";

const ROTATION_3_SERVE: Play = new Play(
  "Rotation 3 - M2 Serve",
  [M1, O2, RIGHT],
  ROTATION_3_SERVE_POSITIONS
);

const ROTATION_3_RECEIVE: Play = new Play(
  "Rotation 3 Receive - O2 pulls back while setter pushes middle",
  [M1, O2, RIGHT],
  ROTATION_3_RECEIVE_POSITIONS
);

const ROTATION_3_RECEIVE_ALT: Play = new Play(
  "Rotation 3 Receive (Alternative) - ",
  [M1, O2, RIGHT],
  ROTATION_3_RECEIVE_ALT_POSITIONS
);

export const ROTATION_3: Rotation = new Rotation(
  "Rotation 3",
  ROTATION_3_SERVE,
  ROTATION_3_RECEIVE,
  ROTATION_3_RECEIVE_ALT
);

