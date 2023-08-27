<template>
  <section>
    <div class="">
      <img
        class=""
        v-if="selectedImage"
        :src="selectedImage"
        alt=""
      />
      <label
        v-else
        for="upload-images"
        class="border p-[20px] w-[10%] mx-auto border-dashed border-green-500 rounded-full flex items-center justify-center mt-[20px]"
        id="dropcontainer"
        @change="uploadToPredefined"
      >
        <span
          class="text-[12px] text-center font-bold text-green-500 cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#319217"
            viewBox="0 0 256 256"
          >
            <path
              d="M244,128a83.28,83.28,0,0,1-16.8,50.4,4,4,0,1,1-6.4-4.8A76,76,0,1,0,84,128a4,4,0,0,1-8,0,83.45,83.45,0,0,1,4.57-27.27A52,52,0,1,0,72,204H96a4,4,0,0,1,0,8H72A60,60,0,1,1,83.61,93.13,84,84,0,0,1,244,128Zm-89.17-2.83a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L148,137.66V208a4,4,0,0,0,8,0V137.66l25.17,25.17a4,4,0,0,0,5.66-5.66Z"
            ></path>
          </svg>
        </span>
        <input type="file" id="upload-images" class="hidden" />
      </label>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { useImageStore } from "../../stores/imagestore";

defineProps({
  selectedImage: { type: String, default: "" },
});

const emit = defineEmits();
const imageStore = useImageStore();

const imageEl = ref(null);
const text = ref("");

useResizeObserver(imageEl, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  text.value = `width: ${width}, height: ${height}`;
});

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
