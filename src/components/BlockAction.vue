<template>
  <div>
    <div
      class="flex flex-col items-center justify-end gap-[8px] cursor-pointer"
    >
      <p
        @click="structureStore.deleteBlock(index)"
        class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer w-[100%] px-[16xpx] py-[8px]"
      >
        Delete
      </p>
      <p
        @click="structureStore.duplicateBlock(index)"
        class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer w-[100%] px-[16xpx] py-[8px]"
      >
        Duplicate
      </p>
      <p
        @click="structureStore.moveItemToFront(index)"
        class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer w-[100%] px-[16xpx] py-[8px]"
      >
        Move forward
      </p>
      <p
        @click="structureStore.moveItemToBack(index)"
        class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer w-[100%] px-[16xpx] py-[8px]"
      >
        Move backward
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";

defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const structureStore = useStructureStore();
const imageStore = useImageStore();
const toolsStore = useToolsStore();
</script>

<style></style>
