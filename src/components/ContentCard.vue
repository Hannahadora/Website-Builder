<script setup lang="ts">
import { useToolsStore } from "@/stores/toolsbar";
defineProps({
  title: {
    type: String,
    required: true,
  },
});

const toolsStore = useToolsStore();

const showStyle = (title: string) => {
  toolsStore.toggleEditorStyle(title.toLowerCase());
};
</script>
<template>
  <div :class="toolsStore.selectedTool === title.toLowerCase() &&  'border border green-900'"
    class="hover:border hover:border-green-900 rounded-[5px] max-w-[70px] cursor-pointer"
  >
    <div
      class="py-[5px] px-[5px] flex flex-col items-center justify-center"
      @click="showStyle(title)"
    >
      <slot name="icon"></slot>
      <slot name="draggable"></slot>

      <h6 class="text-[10px] mt-[4px] font-medium capitalize text-[#000] text-center">
        {{ title }}
      </h6>
    </div>
  </div>
</template>

<style></style>
