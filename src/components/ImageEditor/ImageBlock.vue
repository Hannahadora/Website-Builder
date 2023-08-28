<template>
  <div class="relative" v-if="selectedImage">
    <div class="absolute top-5 right-5" :class="`${
        structureStore.selectedBlockIndex === index ?
        'block': 'hidden'}`">
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
      class="min-h-[200px]"
      :class="`${
        structureStore.selectedBlockIndex === index &&
        'border border-dashed border-red-700 p-[10px]'
      } p-[0px] z-[${index + 1}]`"
    >
      <img class="w-full h-full" :src="selectedImage" alt="img" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
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
const imageStore = useImageStore();
const structureStore = useStructureStore();

const showActions = ref<Boolean>(false);

const uploadToPredefined = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        imageStore.addToPredifinedImages(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }
  input.value = ""; // Clear the input to allow uploading same image again
};

</script>

<style scoped>
.image-block {
  border: 1px solid #ccc;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.resize-icon {
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  right: 0;
  cursor: se-resize;
  background-color: #000;
  border: 1px solid #fff;
}
</style>
