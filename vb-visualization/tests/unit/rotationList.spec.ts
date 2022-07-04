import { RotationList } from "@/controllers/rotationList.service";
import { TEST_ROTATION_1, TEST_ROTATION_2 } from "./rotationList.spec.data";

describe("rotationsList.service.ts", () => {
  let rotationList: RotationList;

  beforeEach(() => {
    rotationList = new RotationList([TEST_ROTATION_1, TEST_ROTATION_2]);
  });

  describe("getRotation", () => {
    it("Should get the rotation service at the index", () => {
      expect(rotationList.getRotationService(0).rotation.name).toEqual("Rotation 1");

      expect(rotationList.getRotationService(1).rotation.name).toEqual("Rotation 2");
    });
  });
});
