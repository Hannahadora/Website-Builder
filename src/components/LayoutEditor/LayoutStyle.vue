<template>
  <section class="w-full">
    <ColorPicker />
    <div
      contenteditable
      :class="`mb-[24px] text-center border bg-[${circlebgColor}] rounded-[50%] h-[${circleheight}] w-[${circlewidth}]`"
    >circle</div>
    <div
      contenteditable
      :class="`border bg-[${squarebgColor}] h-[${squareheight}] w-[${squarewidth}]`"
    >square</div>
  </section>
</template>

<script setup lang="ts">
import ColorPicker from '../ColorPicker.vue';

defineProps({
    circlebgColor: {type: String, default: 'transparent'},
    squarebgColor: {type: String, default: 'transparent'},
    rectanglebgColor: {type: String, default: 'transparent'},
    circleheight: {type: String, default: '100px'},
    circlewidth: {type: String, default: '100px'},
    squareheight: {type: String, default: '100px'},
    squarewidth: {type: String, default: '100px'},
})
</script>

<style></style>
