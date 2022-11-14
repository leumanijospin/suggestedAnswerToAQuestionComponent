<template>
    <details class="max-w-[972px] py-6 border-[1px] border-solid border-[#DADBDD] rounded-xl">
          <summary class="flex flex-row items-center gap-x-4">
             <DisplayAndCloseAnswer  show-answer="+" close-answer="-" class="ml-8"/>
             <p class="font-Outfit not-italic font-light text-base text-black">{{ textQuestion }}</p>
          </summary>
        <div class="grid gap-y-4 mt-4 ml-[70px]">
            <RightAnswer right-answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>
            <WrongAnswer wrong-answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." />
            <WrongAnswer wrong-answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." />
            <WrongAnswer wrong-answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." />
          </div>
      </details>
</template>

<script setup lang="ts">
import  DisplayAndCloseAnswer from './DisplayAndCloseAnswer.vue';
import WrongAnswer from './WrongAnswer.vue';
import RightAnswer from './RightAnswer.vue';
defineProps({
    textQuestion: {
        type: String,
        default: ""
    }

})
</script>

<style scoped>
details[open] summary {
    border-bottom: 1px solid #DADBDD;
    padding-bottom: 24px;
}
</style>