import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import suggestedAnswerToAQuestion from '../components/suggestedAnswerToAQuestion.vue'
import DisplayAndCloseAnswer from '../components/DisplayAndCloseAnswer.vue'
import RightAnswer from '../components/RightAnswer.vue'
import WrongAnswer from '../components/WrongAnswer.vue'

describe("QuestionSuggestionAnswer", () => {
    const wrapper = mount (suggestedAnswerToAQuestion)
  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  })

  it("should awaited the DisplayAndCloseAnswer component", () => {
    expect(wrapper.findComponent(DisplayAndCloseAnswer).exists()).toBe(true);
  })

  it("should awaited the right answer component correctly", () => {
      expect(wrapper.findComponent(RightAnswer).exists()).toBe(true);
  })

  it("should awaited the wrong answer component correctly", () => {
    expect(wrapper.findComponent(WrongAnswer).exists()).toBe(true);
  })

  it ("should awaited the suggestions answer of question when the user click", async () => {
     await wrapper.setProps({
      showAnswer: "+",
      closeAnswer: "-",
      textQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus porttitor?",
      rightAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
      wrongAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
     })
     expect(wrapper.find('span').text()).toBe("+")
     expect(wrapper.find('p').text()).toContain("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,")
     await wrapper.find('div').trigger('click')
     expect(wrapper.findAll("p")[1].text()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")
     expect(wrapper.findAll("p")[2].text()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.")
     
    })
})