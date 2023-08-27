<template>
  <section
    class="bg-[#fff] md:p-[20px] p-[10px] md:h-screen md:overflow-y-scroll md:overflow-x-hidden w-full"
  >
    <div v-if="toolsStore.selectedTool">
      <p
        class="capitalize text-center text-[14px] font-bold md:mb-[24px] mb-[12px]"
      >
        {{ !toolsStore.sectionEditor ? toolsStore.selectedTool : "Blocks" }}
      </p>
      <p
        v-if="!toolsStore.sectionEditor"
        class="capitalize text-center text-[14px] md:pb-[24px] pb-[12px] border-b mb-[12px]"
      >
        Default Settings
      </p>
      <div v-if="toolsStore.imageEditor">
        <PredefinedImages />
      </div>
      <div v-if="toolsStore.textEditor">
        <TextStyle />
      </div>
      <div v-if="toolsStore.structureEditor">
        <LayoutStyle />
      </div>
      <div v-if="toolsStore.sectionEditor">
        <div v-if="structureStore.blocks.length > 0">
          <div
            class="cursor-pointer w-full p-[10px] border rounded mb-[16px] hover:border-green-500"
            v-for="(item, index) in structureStore.blocks"
            :key="index"
            @Click="setBlock(item, index)"
          >
            <div class="flex items-center justify-end gap-[8px] cursor-pointer">
              <img
                class="w-[16px] h-[16px]"
                title="delete"
                @click="structureStore.deleteBlock(index)"
                src="/images/delete_icon.svg"
                alt="delete"
              />
              <img
                class="w-[16px] h-[16px]"
                title="duplicate"
                @click="structureStore.duplicateBlock(index)"
                src="/images/duplicate_icon.svg"
                alt="duplicate"
              />
            </div>
            <p
              class="mb-[8px] font-medium italics font-poppins text-[12px] capitalize"
            >
              {{ index + 1 }}. <span>{{ item.type }}</span>
            </p>

            <p v-if="item.type === 'text'" class="overflow-ellipsis">
              {{ item.content }}
            </p>
            <img
              v-if="item.type === 'image'"
              :src="item.content"
              class="w-full h-[70px]"
            />
          </div>
        </div>
        <div v-else class="mt-[40px] italics font-poppins text-center">
          No design block has been added
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center">
      <p class="text-[12px] font-light italic text-center">
        * Select a tools type by clicking on the desired tool
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useToolsStore } from "../stores/toolsbar";
import PredefinedImages from "./ImageEditor/PredefinedImages.vue";
import TextStyle from "./TextEditor/TextStyle.vue";
import LayoutStyle from "./LayoutEditor/LayoutStyle.vue";
import { useStructureStore } from "../stores/structure";

const toolsStore = useToolsStore();
const structureStore = useStructureStore();

const setBlock = (item: any, index: any) => {
  structureStore.selectBlock(index);
  toolsStore.toggleEditorStyle(item.type.toLowerCase());
  alert(item)
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(6, 112, 6);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8be873;
}
</style>
