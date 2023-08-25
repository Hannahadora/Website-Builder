<template>
  <div class="border border-green-500 rounded-[5px] max-w-[100px] cursor-move">
    <div class="py-[16px] px-[16px] flex flex-col items-center justify-center">
      <slot name="icon"></slot>

      <h6 class="text-[16px] mt-[16px] text-[#333] text-center">
        {{ title }}
      </h6>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Content type'
  }
})
</script>

<style></style>
