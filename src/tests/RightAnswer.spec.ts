import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import RightAnswer from '../components/RightAnswer.vue'
import CheckMark from '../assets/image/svg/CheckMark.vue'

describe("RightAnswer", () => {
    const wrapper = mount(RightAnswer)
    it("should render correctly", () => {
       expect(wrapper.exists()).toBe(true)
    })

    it("should contain CheckMark", () => {
        expect(wrapper.findComponent(CheckMark).exists()).toBe(true)
    })

    it("should correctly display the detail of quizz", async () => {
        await wrapper.setProps({
            rightAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        })
        expect(wrapper.find('p').text()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")
    })
})