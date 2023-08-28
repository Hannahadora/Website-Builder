<template>
  <section>

    <div class="md:mb-[30px] mb:[16px]">
      <p class="text-[13px]">Text color</p>
      <div
        @click="showTextColorPallete = !showTextColorPallete"
        :class="`cursor-pointer px-[40px] py-[20px]`"
        :style="`background-color: ${textColor}`"
      ></div>
      <ColorPicker v-if="showTextColorPallete" @getColor="updateTextColor" />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Font size</p>
      <input
        @change="updateFontSize"
        v-model="fontSize"
        type="number"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
      />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Text align</p>
      <select
        @change="updateTextAlign"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
        name=""
        id=""
        v-model="textAlign"
      >
        <option value="left">left</option>
        <option value="right">right</option>
        <option value="center">center</option>
      </select>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTextStore } from "../../stores/textstore";
import { useStructureStore } from "../../stores/structure";
import ColorPicker from "../ColorPicker.vue";

const textsStore = useTextStore();
const structureStore = useStructureStore();

const fontSize = ref(16);
const textAlign = ref("left");
const textColor = ref("#000000");
const showTextColorPallete = ref(false);

const emit = defineEmits();

const addTextBlock = (style: string) => {
  structureStore.addTextToBlock();
};

const updateTextColor = (color: any) => {
  textColor.value = color;
  structureStore.applyTextColor(textColor.value);
};

const updateTextAlign = () => {
  structureStore.applyTextAlign(textAlign.value);
};

const updateFontSize = () => {
  structureStore.applyFontSize(fontSize.value);
};
</script>

<style scoped>
.text-block {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
