<template>
    <div class="w-5 h-5 rounded-full bg-[#0F2E52] text-white flex justify-center items-center text-xl cursor-pointer" @click="showAndCloseAnswer">
        <span v-if="isClicked">{{ showAnswer}}</span>
        <span v-else> {{ closeAnswer }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, } from "vue"
const props = defineProps({
    showAnswer: {
        type: String,
    },
    closeAnswer: {
        type: String,
    }
})

const isClicked = ref (true);

const showAndCloseAnswer = () => {
  isClicked.value = !isClicked.value
} 
</script>