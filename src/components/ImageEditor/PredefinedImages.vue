<template>
  <section>
    <div class="image-modal">
      <p>Upload files</p>
      <input type="file" @change="uploadToPredefined" />
      <div class="md:mt-10">
        <div class="w-full md:block flex md:overflow-x-hidden overflow-x-scroll items-center gap-[10px]">
          <div v-for="(image, i) in predefinedImages" :key="i">
            <img
              class="cursor-pointer border md:w-full w-[50px] h-[50px] md:h-[150px] h-[50px] rounded"
              @click="addImageBlock(image)"
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

const imageStore = useImageStore();
const structureStore = useStructureStore()

const predefinedImages = ref<string[]>(imageStore.predefinedImages);

const emit = defineEmits();

const addImageBlock = (image: string) => {
  imageStore.selectImage(image);
  structureStore.addImageToBlock()
};

const uploadToPredefined = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        predefinedImages.value.push(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }
  input.value = ""; // Clear the input to allow uploading same image again
};
</script>

<style></style>
