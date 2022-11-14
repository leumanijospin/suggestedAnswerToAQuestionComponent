<template>
    <div class="flex items-center gap-x-4">
        <CrossMark />
        <p class="font-outfit not-italic font-light text-base text-black">{{ wrongAnswer }}</p>
    </div>
</template>

<script setup lang="ts">
import CrossMark from '@/assets/image/svg/CrossMark.vue';
defineProps({
    wrongAnswer: {
        type: String,
        default: ""
    }
})
</script>