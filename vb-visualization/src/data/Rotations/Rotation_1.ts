import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { M2, O1, RIGHT } from "../PlayerRoles";
import {
  ROTATION_1_RECEIVE_ALT_POSITIONS,
  ROTATION_1_RECEIVE_POSITIONS,
  ROTATION_1_SERVE_POSITIONS,
} from "../TeamPositions/Rotation_1";

const ROTATION_1_SERVE: Play = new Play(
  "Serve",
  [RIGHT, M2, O1],
  ROTATION_1_SERVE_POSITIONS
);

const ROTATION_1_RECEIVE: Play = new Play(
  "Receive",
  [RIGHT, M2, O1],
  ROTATION_1_RECEIVE_POSITIONS
);

const ROTATION_1_RECEIVE_ALT: Play = new Play(
  "Receive (Alternative)",
  [RIGHT, M2, O1],
  ROTATION_1_RECEIVE_ALT_POSITIONS
);

export const ROTATION_1: Rotation = new Rotation(
  "Rotation 1",
  ROTATION_1_SERVE,
  ROTATION_1_RECEIVE,
  ROTATION_1_RECEIVE_ALT
);
