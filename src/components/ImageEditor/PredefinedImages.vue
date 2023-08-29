<template>
  <section>
    <div class="image-modal">
      <div class="md:mb-[30px] mb-[10px]">
        <p class="text-[12px]">Width (px)</p>
        <input
          @change="structureStore.applyWidth(width)"
          v-model="width"
          type="number"
          class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
        />
      </div>
      <div class="md:mb-[30px] mb-[10px]">
        <p class="text-[12px]">Height (px)</p>
        <input
          @change="structureStore.applyHeight(height)"
          v-model="height"
          type="number"
          class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
        />
      </div>
      <div class="md:mb-[20px] mb-[12px]">
        <label
          for="uplaod-images"
          class="border border-dashed flex items-center justify-center md:w-full w-[50px] h-[50px] md:h-[150px] h-[50px] rounded"
          id="dropcontainer"
          @change="uploadToPredefined"
        >
          <span class="text-[12px] font-bold text-green-500 cursor-pointer"
            >Upload Image</span
          >
          <input type="file" id="uplaod-images" class="hidden" />
        </label>
      </div>

      <div class="md:mt-10">
        <div
          class="w-full md:block flex md:overflow-x-hidden overflow-x-scroll items-center gap-[16px]"
        >
          <div v-for="(image, i) in predefinedImages" :key="i">
            <img
              class="cursor-pointer border md:w-full w-[50px] h-[50px] md:h-[150px] h-[50px] rounded"
              @click="updateImageBlock(image)"
              :src="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImageStore } from "../../stores/imagestore";
import { useStructureStore } from "@/stores/structure";
import { useTextStore } from "@/stores/textstore";

const imageStore = useImageStore();
const structureStore = useStructureStore();
const textsStore = useTextStore();

const predefinedImages = ref<string[]>(imageStore.predefinedImages);

const emit = defineEmits();
const fontSize = ref(16);
const textColor = ref("#000000");
const showTextColorPallete = ref(false);
const width = ref(100);
const height = ref(100);

const updateImageBlock = (image: string) => {
  imageStore.selectImage(image);
  structureStore.applyImage(image);
  // structureStore.addImageToBlock()
};

const updateTextColor = (color: any) => {
  textColor.value = color;
  structureStore.applyTextColor(textColor.value);
};

const updateFontSize = () => {
  structureStore.applyFontSize(fontSize.value);
};

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

<style></style>
