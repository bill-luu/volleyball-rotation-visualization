import Court from "@/components/court.vue";
import { mount } from "@vue/test-utils";
describe("court.vue", () => {
  const wrapper = mount(Court);
  it("should create a wrapper", () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe("calculateTransform", () => {
    expect(wrapper.vm.calculateTransform({ X: 1, Y: 2 })).toEqual({
      translation: `translate(1px, 2px)`,
    });
  });
});
