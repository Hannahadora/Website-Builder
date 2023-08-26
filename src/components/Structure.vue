<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import TipTap from "./TextEditor/TipTap.vue";

defineProps({
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

const text = ref("");

</script>

<template>
  <div ref="el" class="border border-dashed border-red-700">
    <TipTap v-if="item.type === 'text'" class="w-auto" />
    <ImageBlock
      v-if="item.type === 'image'"
      class="w-auto"
      :selectedImage="item.content"
    />

    <div class="resize-icon"></div>
  </div>
</template>
