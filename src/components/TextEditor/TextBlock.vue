<template>
  <div
    class="relative p-[10px]"
    :class="`${
      structureStore.selectedBlockIndex === index &&
      'border border-dashed border-red-700 p-[10px]'
    } p-[0px] z-[${index + 1}]`"
  >
    <TipTap :index="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "../../stores/structure";
import { useImageStore } from "../../stores/imagestore";
import { useToolsStore } from "../../stores/toolsbar";
import TipTap from "./TipTap.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const structureStore = useStructureStore();
const imageStore = useImageStore();
const toolsStore = useToolsStore();

const el = ref<HTMLElement | null>(null);

const showActions = ref<Boolean>(false);
</script>

<style></style>
