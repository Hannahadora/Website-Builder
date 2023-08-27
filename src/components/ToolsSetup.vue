<template>
  <section class="bg-[#fff] md:p-[20px] p-[10px] md:h-screen md:overflow-y-scroll md:overflow-x-hidden w-full">
      <div v-if="toolsStore.selectedTool">
        <p class="capitalize text-center text-[14px] font-bold md:mb-[24px] mb-[12px]">
          {{ toolsStore.selectedTool }}
        </p>
        <p class="capitalize text-center text-[14px] md:pb-[24px] pb-[12px] border-b mb-[12px]">
          Default Settings
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
