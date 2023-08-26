<script setup lang="ts">
import { ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import Structure from "./Structure.vue";

const structureStore = useStructureStore();

const blocks = ref(<any[]>structureStore.blocks);

const duplicateBlock = (index: number) => {
  const duplicatedBlock = { ...blocks.value[index] };
  blocks.value.splice(index + 1, 0, duplicatedBlock);
};

const deleteBlock = (index: number) => {
  blocks.value.splice(index, 1);
};
</script>

<template>
  <main class="relative min-h-[100vh]">
    <section class="flex justify-start items-start">
      <div v-for="(item, index) in structureStore.blocks" :key="index">
        <Structure :item="item" :index="index" />
      </div>
    </section>
  </main>
</template>

<style></style>
