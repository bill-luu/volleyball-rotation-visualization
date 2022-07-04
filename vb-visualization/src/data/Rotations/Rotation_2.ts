import { Play } from "@/interfaces/I_Play";
import { Rotation } from "@/interfaces/I_Rotation";
import { RIGHT, M2, O2 } from "../PlayerRoles";
import {
  ROTATION_2_RECEIVE_POSITIONS,
  ROTATION_2_SERVE_POSITIONS,
} from "../TeamPositions/Rotation_2";

const ROTATION_2_SERVE: Play = new Play(
  "Serve",
  [RIGHT, M2, O2],
  ROTATION_2_SERVE_POSITIONS
);

const ROTATION_2_RECEIVE: Play = new Play(
  "Receive",
  [RIGHT, M2, O2],
  ROTATION_2_RECEIVE_POSITIONS
);


export const ROTATION_2: Rotation = new Rotation(
  "Rotation 2",
  ROTATION_2_SERVE,
  ROTATION_2_RECEIVE,
);
