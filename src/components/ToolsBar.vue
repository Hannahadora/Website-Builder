<template>
  <section class="bg-[#E4E4E4] md:p-[20px] p-[10px] md:h-screen">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-[20px]">
        <h3 class="text-[16px] font-[600]">Tools</h3>
      </div>
      <div>
        <div class="md:block md:w-auto w-full flex gap-[20px] items-center justify-between">
          <ContentCard
            class="mb-[10px]"
            title="layout"
            @click="structure.addElement"
          >
            <template #icon>
              <LayoutIcon class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>
          <ContentCard
            class="mb-[10px]"
            title="text"
            @click="structure.addTextToBlock"
          >
            <template #icon>
              <Text class="w-[20px] h-[20px]" />
            </template>
          </ContentCard>

          <ContentCard class="mb-[10px]" title="image">
            <template #icon>
              <Image class="w-[20px] h-[20px]" />
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

const structure = useStructureStore();
const toolsStore = useToolsStore();

onMounted(() => {
  // console.log("textref", textRef);
});
</script>

<style></style>
