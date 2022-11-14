<template>
    <div class="flex items-center gap-x-4">
       <CheckMark/>
       <p class="font-Outfit not-italic font-light text-base text-black">{{ rightAnswer }}</p>
    </div>
</template>

<script setup lang="ts">
import CheckMark from '@/assets/image/svg/CheckMark.vue';
defineProps({
    rightAnswer: {
        type: String,
        default: ""
    }
})
</script>