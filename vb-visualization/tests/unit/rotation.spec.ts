import { RotationService } from "@/controllers/rotation.service";
import {
    EXPECTED_PLAY,
    NEXT_PLAY_EXPECTED,
    TEST_ROTATION,
    TEST_ROTATION_WITH_ALT
} from "./rotation.spec.data";

describe("rotations.service.ts", () => {
  let rotationService: RotationService;
  beforeEach(() => {
    rotationService = new RotationService(TEST_ROTATION);
  });

  describe("getCurrentPlay", () => {
    it("Should return the current play", () => {
      expect(rotationService.getCurrentPlay()).toEqual(EXPECTED_PLAY);
    });
  });

  describe("nextPlay", () => {
    describe("If there's no alt play", () => {
      it("Should transition from serve to receive", () => {
        rotationService.nextPlay();
        expect(rotationService.getCurrentPlay()).toEqual(
          NEXT_PLAY_EXPECTED.NO_ALT.RECEIVE
        );
      });

      it("Should transition from receive back to serve", () => {
        rotationService.nextPlay(); // serve -> receive
        rotationService.nextPlay(); // receive -> serve
        expect(rotationService.getCurrentPlay()).toEqual(
          NEXT_PLAY_EXPECTED.NO_ALT.SERVE
        );
      });
    });

    describe("If there's an alt play", () => {
      beforeEach(() => {
        rotationService = new RotationService(TEST_ROTATION_WITH_ALT);
      });
      it("Should transition from serve to receive", () => {
        rotationService.nextPlay();
        expect(rotationService.getCurrentPlay()).toEqual(
          NEXT_PLAY_EXPECTED.ALT.RECEIVE
        );
      });

      it("Should transition from receive to alt", () => {
        rotationService.nextPlay(); // serve -> receive
        rotationService.nextPlay(); // receive -> alt
        expect(rotationService.getCurrentPlay()).toEqual(
          NEXT_PLAY_EXPECTED.ALT.ALT
        );
      });
      it("Should transition from alt back to serve", () => {
        rotationService.nextPlay(); // serve -> receive
        rotationService.nextPlay(); // receive -> alt
        rotationService.nextPlay(); // alt -> serve
        expect(rotationService.getCurrentPlay()).toEqual(
          NEXT_PLAY_EXPECTED.ALT.SERVE
        );
      });
    });
  });
});
