<template>
  <ColorPicker
    theme="light"
    :color="selectedColor"
    :sucker-hide="false"
    :sucker-canvas="suckerCanvas"
    :sucker-area="suckerArea"
    @changeColor="changeColor"
    @openSucker="openSucker"
    @inputFocus="inputFocus"
    @inputBlur="inputBlur"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

const selectedColor = ref("");
const suckerCanvas = ref(null);
const suckerArea = ref([]);
const isSucking = ref<Boolean>(false);

const changeColor = (color: any) => {
  const { r, g, b, a } = color.rgba;
  selectedColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  
};
const openSucker = (isOpen: Boolean) => {
  if (isOpen) {
    // ... canvas be created
    // this.suckerCanvas = canvas
    // this.suckerArea = [x1, y1, x2, y2]
  } else {
    // this.suckerCanvas && this.suckerCanvas.remove
  }
};
const inputFocus = (event: FocusEvent) => {
  // this will get triggered on input field (hex and rgba) get focus
  // prop value will be FocusEvent object associated with the input
};
const inputBlur = (event: FocusEvent) => {
  // this  will get triggeredon input field (hex and rgba) get out of focus (blur event)
  // prop value will be FocusEvent object associated with the input
};
</script>

<style></style>
