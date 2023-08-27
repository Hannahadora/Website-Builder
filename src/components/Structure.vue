<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import TipTap from "./TextEditor/TipTap.vue";
import VueResizable from 'vue-resizable'


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

const showActions = ref<Boolean>(false);

</script>

<template>
  <VueResizable dragElements="" :fitParent="true" :active="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']" :minW="100" :minH="100" >
  <div @dblclick="showActions = !showActions" ref="el" :class="`relative border focus:border-dashed focus:border-red-700 z-[${index + 1}]`">
    <div v-if="showActions" class="absolute top-0 right-0 bg-green-300 p-[8px] w-[60px] z-[20]">
      <div class="flex items-center justify-end gap-[8px] cursor-pointer">
        <img class="w-[16px] h-[16px]" title="delete" @click="structureStore.deleteBlock(index)" src="/images/delete_icon.svg" alt="delete">
        <img class="w-[16px] h-[16px]" title="duplicate" @click="structureStore.duplicateBlock(index)" src="/images/duplicate_icon.svg" alt="duplicate">
      </div>
    </div>
    <TipTap v-if="item.type === 'text'" class="w-auto" />
    <ImageBlock
      v-if="item.type === 'image'"
      class="w-auto"
      :selectedImage="item.content"
    />

    <!-- <div class="resize-icon"></div> -->
  </div>
</VueResizable>
</template>
