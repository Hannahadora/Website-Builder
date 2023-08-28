<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "../stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import VueResizable from "vue-resizable";
import BlockAction from "./BlockAction.vue";
import Menu from "./icons/Menu.vue";
import TextBlock from "./TextEditor/TextBlock.vue";
import LayoutBlock from "./LayoutEditor/LayoutBlock.vue";

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

<template>
  <VueResizable
    dragElements="cursor-move"
    :active="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']"
  >
    <TextBlock v-if="item.type === 'text'" :index="index" :item="item" />

    <ImageBlock
      v-if="item.type === 'image'"
      :index="index"
      :item="item"
      class="w-full h-full"
      :selectedImage="item.content"
    />

    <LayoutBlock
      v-if="item.type === 'layout'"
      :index="index"
      :item="item"
      class="w-full h-full"
    />

    <!-- <div class="resize-icon"></div> -->
  </VueResizable>
</template>

<style scoped>
.block-wrapper {
  padding: 0;
  border: none;
}
.block-wrapper:focus {
  border: 1px dashed red;
  padding: 10px;
}
</style>
