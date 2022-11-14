import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DisplayAndCloseAnswer from '../components/DisplayAndCloseAnswer.vue'

describe("DisplayAndCloseAnswer", () => {
    const wrapper = mount(DisplayAndCloseAnswer) 

    it("should render correctly", () => {
        expect(wrapper.exists()).toBe(true);
    })

    it("should have a correct value for display quizz detail", async () => {
        await wrapper.setProps({
            showAnswer: "+",
        })
        expect(wrapper.find("span").text()).toBe("+")
    })

    it("should awaited a correct value for close quizz detail", async () => {
        await wrapper.setProps({
            closeAnswer: "-"
        })
        expect(wrapper.find("span").text()).toBe("+")
        await wrapper.find("div").trigger("click")
        expect(wrapper.find("span").text()).toBe("-")
    })
})