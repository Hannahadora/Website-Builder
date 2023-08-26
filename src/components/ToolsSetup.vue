<template>
  <section class="bg-[#fff] h-screen overflow-y-scroll w-full">
    <div class="p-[10px]">
      <div v-if="toolsStore.selectedTool">
        <p class="capitalize text-center text-[12px] font-bold mb-[24px]">
          {{ toolsStore.selectedTool }}
        </p>
        <div v-if="toolsStore.imageEditor">
          <PredefinedImages />
        </div>
        <div v-if="toolsStore.textEditor">
          <TextStyle />
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-screen">
        <p class="text-[12px] font-light italic text-center">
          * Select a tools type by clicking on the desired tool
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useToolsStore } from "../stores/toolsbar";
import PredefinedImages from "./ImageEditor/PredefinedImages.vue";
import TextStyle from "./TextEditor/TextStyle.vue";
const toolsStore = useToolsStore();
</script>

<style></style>
../stores/toolsbar
