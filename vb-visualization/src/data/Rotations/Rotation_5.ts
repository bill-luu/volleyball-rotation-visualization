import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { M1, O1, SETTER } from "../PlayerRoles";
import {
  ROTATION_5_RECEIVE_POSITIONS,
  ROTATION_5_RECEIVE_ALT_POSITIONS,
  ROTATION_5_SERVE_POSITIONS,
} from "../TeamPositions/Rotation_5";

const ROTATION_5_SERVE: Play = new Play(
  "Rotation 5 - OH 2 Serve",
  [SETTER, M1, O1],
  ROTATION_5_SERVE_POSITIONS
);

const ROTATION_5_RECEIVE: Play = new Play(
  "Rotation 5 Receive - Setter pushes M1, O1 pulls back",
  [SETTER, M1, O1],
  ROTATION_5_RECEIVE_POSITIONS
);

const ROTATION_5_RECEIVE_ALT: Play = new Play(
  "Rotation 5 Receive (Alternative) - Setter stacks with M1, M2 receives",
  [SETTER, M1, O1],
  ROTATION_5_RECEIVE_ALT_POSITIONS,
);

export const ROTATION_5: Rotation = new Rotation(
  "Rotation 5",
  ROTATION_5_SERVE,
  ROTATION_5_RECEIVE,
  ROTATION_5_RECEIVE_ALT
);
