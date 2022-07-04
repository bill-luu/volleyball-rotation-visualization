import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { M1, O2, SETTER } from "../PlayerRoles";
import {
  ROTATION_4_RECEIVE_POSITIONS,
  ROTATION_4_SERVE_ALT_POSITIONS,
  ROTATION_4_SERVE_POSITIONS,
} from "../TeamPositions/Rotation_4";

const ROTATION_4_SERVE: Play = new Play(
  "Rotation 4 - Serve",
  [SETTER, M1, O2],
  ROTATION_4_SERVE_POSITIONS
);

const ROTATION_4_RECEIVE: Play = new Play(
  "Rotation 4 - Receive",
  [SETTER, M1, O2],
  ROTATION_4_RECEIVE_POSITIONS
);

const ROTATION_4_RECEIVE_ALT: Play = new Play(
  "Rotation 4 - Receive (Alternative)",
  [SETTER, M1, O2],
  ROTATION_4_SERVE_ALT_POSITIONS
);

export const ROTATION_4: Rotation = new Rotation(
  "Rotation 4",
  ROTATION_4_SERVE,
  ROTATION_4_RECEIVE,
  ROTATION_4_RECEIVE_ALT
);
