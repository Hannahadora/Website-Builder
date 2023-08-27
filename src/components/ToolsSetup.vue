<template>
  <section class="bg-[#fff] md:h-screen md:overflow-y-scroll md:overflow-x-hidden w-full">
    <div class="p-[10px]">
      <div v-if="toolsStore.selectedTool">
        <p class="capitalize text-center text-[12px] font-bold md:mb-[24px] mb-[12px]">
          {{ toolsStore.selectedTool }}
        </p>
        <div v-if="toolsStore.imageEditor">
          <PredefinedImages />
        </div>
        <div v-if="toolsStore.textEditor">
          <TextStyle />
        </div>
        <div v-if="toolsStore.structureEditor">
          <LayoutStyle />
        </div>
      </div>
      <div v-else class="flex items-center justify-center">
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
import LayoutStyle from "./LayoutEditor/LayoutStyle.vue";

const toolsStore = useToolsStore();
</script>

<style></style>
