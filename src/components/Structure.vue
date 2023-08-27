<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import TipTap from "./TextEditor/TipTap.vue";
import VueResizable from "vue-resizable";

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
  <VueResizable
    dragElements=""
    :active="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']"
    :minW="200"
    :minH="200"
  >
    <div
      @dblclick="showActions = !showActions"
      ref="el"
      :class="`min-h-[200px] w-full ${
        structureStore.selectedBlockIndex === index &&
        'border border-dashed border-red-700 p-[10px]'
      } relative p-[0px] z-[${index + 1}]`"
    >
      <div
        v-if="showActions"
        class="absolute top-0 right-0 bg-green-300 p-[8px] w-[60px] z-[20]"
      >
        <div class="flex items-center justify-end gap-[8px] cursor-pointer">
          <img
            class="w-[16px] h-[16px]"
            title="delete"
            @click="structureStore.deleteBlock(index)"
            src="/images/delete_icon.svg"
            alt="delete"
          />
          <img
            class="w-[16px] h-[16px]"
            title="duplicate"
            @click="structureStore.duplicateBlock(index)"
            src="/images/duplicate_icon.svg"
            alt="duplicate"
          />
        </div>
      </div>
      <TipTap
        v-if="item.type === 'text'"
        class=""
        :style="{
          color: item.textColor,
          fontSize: `${item.fontSize}px`,
          textAlign: item.textAlign,
        }"
      />
      <ImageBlock
        v-if="item.type === 'image'"
        class=""
        :selectedImage="item.content"
      />
      <div
        v-if="item.type === 'layout'"
        :class="`focus:outline-none w-full grid grid-cols-${item.grids}`"
        :style="{
          background: item.backgroundColor,
          border:
            item.borderWidth > 0
              ? `${item.borderWidth}px solid ${item.borderColor}`
              : 'none',
        }"
      >
        <div
          contenteditable
          v-for="n in item.grids"
          :key="n"
          :class="`${item.grids > 1 && 'border border-dashed'}`"
        >
          {{ item.content }}
        </div>
      </div>
      <!-- <div class="resize-icon"></div> -->
    </div>
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
