<template>
  <div ref="imageEl"
    class="image-block h-[100vh] w-full"
    :style="{ backgroundImage: `url(${selectedImage})` }"
  >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";

defineProps({
  selectedImage: { type: String, default: "" },
});

const emit = defineEmits();

const imageEl = ref(null);
const text = ref("");

useResizeObserver(imageEl, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  text.value = `width: ${width}, height: ${height}`;
});
</script>

<style scoped>
.image-block {
  border: 1px solid #ccc;
  position: relative;
  background-size: cover;
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
