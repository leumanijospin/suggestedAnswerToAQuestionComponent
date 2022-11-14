import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import WrongAnswer from '../components/WrongAnswer.vue'
import CrossMark from '../assets/image/svg/CrossMark.vue'

describe("WrongAnswer", () => {
    const wrapper = mount(WrongAnswer)
   it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
   })

   it("should contain CrossMark", () => {
    expect(wrapper.findComponent(CrossMark).exists()).toBe(true);
   })

   it("should correctly display the detail of quizz", async () => {
     await wrapper.setProps({
      wrongAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
    })
    expect(wrapper.find("p").text()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")
   })
})