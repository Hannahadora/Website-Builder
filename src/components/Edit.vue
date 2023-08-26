<script setup>
import { useStructureStore } from "@/stores/structure";
import { useSideBarStore } from "@/stores/sidebar";
import StructureVue from "./Structure.vue";

const structureStore = useStructureStore();
const store = useSideBarStore();
</script>

<template>
  <main class="min-h-[300px]">
    <section class="border border-dashed w-full h-auto">
      <structure-vue :content="structureStore.content" />
    </section>
  </main>
</template>

<style></style>
