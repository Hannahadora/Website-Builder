<template>
  <section class="bg-green-500 md:p-[20px] p-[10px] md:h-screen">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-[20px]">
        <h3 class="text-[16px] font-[600]">Tools</h3>
      </div>
      <div>
        <div class="md:block md:w-auto w-full flex gap-[20px] items-center justify-between">
          <ContentCard
            class="mb-[10px]"
            title="sections"
            @click="toolsStore.toggleEditorStyle('section')"
          >
            <template #icon>
              <LayoutIcon class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>
       
          <ContentCard
            class="mb-[10px]"
            title="text"
            @click="structureStore.addTextToBlock"
          >
            <template #icon>
              <Text class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>

          <ContentCard class="mb-[10px]" title="image" @click="structureStore.addImageToBlock">
            <template #icon>
              <Image class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>
          <ContentCard
            class="mb-[10px]"
            title="layout"
            @click="structureStore.addElement"
          >
            <template #icon>
              <LayoutIcon class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>
          <ContentCard class="mb-[10px]" title="button">
            <template #icon>
              <Button class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentCard from "./ContentCard.vue";
import Button from "./icons/Button.vue";
import Image from "./icons/Image.vue";
import LayoutIcon from "./icons/LayoutIcon.vue";
import Text from "./icons/Text.vue";
import { ref, onMounted } from "vue";
import { useStructureStore } from "@/stores/structure";
import { useToolsStore } from "../stores/toolsbar";

const structureStore = useStructureStore();
const toolsStore = useToolsStore();

onMounted(() => {
  // console.log("textref", textRef);
});
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
