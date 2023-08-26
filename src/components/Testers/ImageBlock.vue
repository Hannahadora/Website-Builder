<template>
  <div
    class="image-block w-[500px] h-[100px]"
    :style="{ backgroundImage: `url(${selectedImage})` }"
  >
    <div class="resize-icon" @mousedown="startResize"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const { selectedImage } = defineProps({
  selectedImage: { type: String, default: "" },
});

const emit = defineEmits();

const isResizing = ref(false);
const initialMouseX = ref(0);
const initialWidth = ref(0);

const startResize = (event: MouseEvent) => {
  isResizing.value = true;
  initialMouseX.value = event.clientX;
  initialWidth.value = event.target.parentElement.offsetWidth;

  window.addEventListener("mousemove", resizeImage);
  window.addEventListener("mouseup", stopResize);
};

const resizeImage = (event: MouseEvent) => {
  if (isResizing.value) {
    const offset = event.clientX - initialMouseX.value;
    const newWidth = initialWidth.value + offset;
    event.target.parentElement.style.width = `${newWidth}px`;
  }
};

const stopResize = () => {
  isResizing.value = false;
  window.removeEventListener("mousemove", resizeImage);
  window.removeEventListener("mouseup", stopResize);
};
</script>

<style scoped>
.image-block {
  border: 1px solid #ccc;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.resize-icon {
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  right: 0;
  cursor: se-resize;
  background-color: #000;
  border: 1px solid #fff;
}
</style>
