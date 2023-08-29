<script setup lang="ts">
import { ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import Structure from "./Structure.vue";
import { useToolsStore } from "../stores/toolsbar";

import { UseDraggable } from "@vueuse/components";

const structureStore = useStructureStore();
const toolsStore = useToolsStore();

const blocks = ref(<any[]>structureStore.blocks);

const setStructure = (index: any, item: any) => {
  structureStore.selectBlock(index);
  toolsStore.toggleEditorStyle(item.type.toLowerCase());
};
</script>

<template>
  <main class="relative w-full h-[100vh] rounded bg-[#fff] shadow overflow-x-hidden overflow-y-scroll md:px-[16px] px-[10px] md:pt-[16px] pt-[10px] pb-[100px]">
    <div class="" v-for="(item, index) in structureStore.blocks" :key="index">
      <UseDraggable
        class="z-[8888888]"
        :initialValue="{ x: 5, y: 5 }"
        style="position: absolute"
        storage-key="vueuse-draggable"
        storage-type="session"
      >
        <Structure
          @click.stop="setStructure(index, item)"
          :item="item"
          :index="index"
        />
      </UseDraggable>
    </div>
  </main>
</template>

<style></style>
