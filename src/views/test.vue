<template>
  <div class="app">
    <div>
      <p class="cursor-pointer" @click="showImageModal = true">Add Image Block</p>

      <!-- Image Modal -->
      <div v-if="showImageModal" class="w-[50%] mx-auto  image-modal">
        <p>Upload files</p>
        <input type="file" @change="uploadToPredefined" />
        <div class="mt-10 border border-red-500">
          <p>Selected Images</p>
          <div class="grid grid-cols-3 gap-5">
            <div v-for="(image, i) in predefinedImages" :key="i">
            <img class="border w-[1000px] h-[100px] border-purple-500 rounded" @click="addImageBlock(image)" :src="image" alt="">
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border w-[75%] m-10">
      <draggable v-model="blocks" group="blocks">
        <div v-for="(element, i) in blocks" :key="i">
          <div class="block">
            <div v-if="element.type === 'text'">
              <TextBlock v-model="element.content" />
            </div>
            <div v-else-if="element.type === 'image'">
              <ImageBlock :selectedImage="element.selectedImage" />
            </div>
            <button @click="duplicateBlock(i)">Duplicate</button>
            <button @click="deleteBlock(i)">Delete</button>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import TextBlock from "../components/Testers/TextBlock.vue";
import ImageBlock from "../components/Testers/ImageBlock.vue";

const blocks = ref(<any[]>[]);
const showImageModal = ref(false);
const predefinedImages = ref<string[]>([
  "../assets/images/hero-1.webp",
  "../assets/images/hero-2.jpeg",
  "../assets/images/hero-3.jpg",
  // Add more predefined images here
]);

const addImageBlock = (image: string) => {
  blocks.value.push({ type: "image", selectedImage: image });
  showImageModal.value = false; // Close the modal
};

const duplicateBlock = (index: number) => {
  const duplicatedBlock = { ...blocks.value[index] };
  blocks.value.splice(index + 1, 0, duplicatedBlock);
};

const deleteBlock = (index: number) => {
  blocks.value.splice(index, 1);
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
  input.value = ''; // Clear the input to allow uploading same image again
};

</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.layout {
  min-height: 200px; /* Set a minimum height for the layout area */
}

.block {
  display: flex;
  align-items: center;
  margin: 10px;
}
</style>
