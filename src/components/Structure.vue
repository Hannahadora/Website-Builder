<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useImageStore } from "../stores/imagestore";
import { useToolsStore } from "../stores/toolsbar";
import ImageBlock from "./ImageEditor/ImageBlock.vue";
import Quill from "./TextEditor/Quill.vue";
import TipTap from "./TextEditor/TipTap.vue";

import { useDraggable } from "@vueuse/core";
import { useResizeObserver } from "@vueuse/core";

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

// `style` will be a helper computed for `left: ?px; top: ?px;`
// const { x, y, style } = useDraggable(el, {
//   initialValue: { x: 40, y: 40 },
// });

const showContent = () => {
  toolsStore.toggleContent();
};

// const resize = () => useResizeObserver(el, (entries) => {
//   const entry = entries[0];
//   const { width, height } = entry.contentRect;
//   text.value = `width: ${width}, height: ${height}`;
// });
</script>

<template>
  <!-- <div ref="el" :style="style"
    style="position: fixed" class="border h-[200px] w-[200px]">
    {{text}}
  </div> -->
  <!-- <textarea ref="el" class="resizer" disabled v-text="text" /> -->

  <div
    ref="el"
    class="border border-dashed border-red-700 w-[50%] h-[200px]"
  >
    <button
      v-if="item.content === ''"
      class="w-[30px] font-[800] h-[30px] border border-green-500 flex items-center justify-center rounded-[50%] text-center text-green-500 text-[20px]"
      @click="showContent()"
    >
      +
    </button>
    <div class="w-full h-full">
      <div v-if="item.type === 'text'" class="">
        <!-- <Quill :content="item.content" /> -->
        <TipTap />
      </div>
      <div v-if="item.type === 'image'" class="w-full" >
        <ImageBlock :selectedImage="item.content" />
      </div>
    </div>
    
    <div class="resize-icon"></div>
  </div>
</template>
