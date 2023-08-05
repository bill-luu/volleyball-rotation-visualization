import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { M2, O1, SETTER } from "../PlayerRoles";
import {
  ROTATION_6_RECEIVE_POSITIONS,
  ROTATION_6_RECEIVE_ALT_POSITIONS,
  ROTATION_6_SERVE_POSITIONS,
} from "../TeamPositions/Rotation_6";

const ROTATION_6_SERVE: Play = new Play(
  "Rotation 6 - MB1 Serve",
  [SETTER, M2, O1],
  ROTATION_6_SERVE_POSITIONS
);

const ROTATION_6_RECEIVE: Play = new Play(
  "Rotation 6 Receive",
  [SETTER, M2, O1],
  ROTATION_6_RECEIVE_POSITIONS
);

const ROTATION_6_RECEIVE_ALT: Play = new Play(
  "Rotation 6 Receive (Alternative) - O1 and M2 bunch together while RS receives",
  [SETTER, M2, O1],
  ROTATION_6_RECEIVE_ALT_POSITIONS
);

export const ROTATION_6: Rotation = new Rotation(
  "Rotation 6",
  ROTATION_6_SERVE,
  ROTATION_6_RECEIVE,
  ROTATION_6_RECEIVE_ALT
);
