<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import TipTap from "./TextEditor/TipTap.vue";
import VueResizable from "vue-resizable";
import BlockAction from "./BlockAction.vue";


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
    dragElements=""
    :active="['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']"
  >
    <div
      @dblclick="showActions = !showActions"
      ref="el"
      :class="`min-w-[${item.width}px] min-h-[${item.height}px] ${
        structureStore.selectedBlockIndex === index &&
        'border border-dashed border-red-700 p-[10px]'
      } relative p-[0px] z-[${index + 1}]`"
      
    >
      <div
        v-if="showActions"
        class="absolute top-0 right-0 border shadow p-[8px] w-[100px] z-[20]"
      >
        <BlockAction :index="index"/>
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
        :class="`min-h-[${item.height}px] focus:outline-none w-full text-transparent`"
        :style="{
          background: item.backgroundColor,
          border:
            item.borderWidth > 0
              ? `${item.borderWidth}px solid ${item.borderColor}`
              : 'none',
        }"
      >{{ item.content }}
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
