<template>
  <div class="relative">
    <div
      class="absolute top-5 right-5"
      :class="`${
        structureStore.selectedBlockIndex === index ? 'block' : 'hidden'
      }`"
    >
      <div
        class="bg-[#fff] px-[10px] py-[10px] float-right cursor-pointer mb-[20px] shadow"
      >
        <Menu @click="showActions = !showActions" />
      </div>
      <div
        v-if="showActions"
        class="bg-[#fff] shadow p-[8px] min-w-[150px] z-[20]"
      >
        <BlockAction :index="index" />
      </div>
    </div>
    <div
      :class="`${
        structureStore.selectedBlockIndex === index &&
        'border border-dashed border-red-700 p-[10px]'
      } p-[0px] z-[${index + 1}]`"
    >
      <div
        :class="`h-[${item.height}px] w-[${item.width}px] `"
        :style="{
          color: item.backgroundColor,
          background: item.backgroundColor,
          border:
            item.borderWidth > 0
              ? `${item.borderWidth}px solid ${item.borderColor}`
              : 'none',
        }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useImageStore } from "../../stores/imagestore";
import { useStructureStore } from "../../stores/structure";
import BlockAction from "../BlockAction.vue";
import Menu from "../icons/Menu.vue";

defineProps({
  selectedImage: { type: String, default: "" },
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits();
const structureStore = useStructureStore();

const showActions = ref<Boolean>(false);
</script>

<style></style>
