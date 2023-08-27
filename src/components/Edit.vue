<script setup lang="ts">
import { ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import Structure from "./Structure.vue";
import { useToolsStore } from "../stores/toolsbar";
import draggable from 'vuedraggable'

const structureStore = useStructureStore();
const toolsStore = useToolsStore();

const blocks = ref(<any[]>structureStore.blocks);

const setStructure = (index: any, item: any) => {
  structureStore.selectBlock(index);
  toolsStore.toggleEditorStyle(item.type.toLowerCase());
};
</script>

<template>
  <main class="relative min-h-[100vh] h-[100%]">
    <section class="">
          <div
            class=""
            v-for="(item, index) in structureStore.blocks"
            :key="index"
          >
            <Structure
              @click="setStructure(index, item)"
              :item="item"
              :index="index"
            />
          </div>
    </section>
  </main>
</template>

<style></style>
