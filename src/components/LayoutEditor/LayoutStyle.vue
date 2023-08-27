<template>
  <section class="w-full md:block flex md:overflow-x-hidden overflow-x-scroll items-start gap-[10px] p-[10px]">
    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">No of Grids</p>
      <input
        @change="structureStore.updateGrid(noOfGrid)"
        v-model="noOfGrid"
        type="number"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
      />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Background color</p>
      <div
        @click="showBgPallete = !showBgPallete"
        :class="`cursor-pointer md:px-[40px] px-[10px] md:w-full w-[50px] h-[50px] md:py-[20px] py-[10px]`"
        :style="`background-color:  ${bgColor}`"
      ></div>
      <ColorPicker v-if="showBgPallete" @getColor="updateBackgroundColor" />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Border color</p>
      <div
        @click="showBorderPallete = !showBorderPallete"
        :class="`cursor-pointer md:px-[40px] px-[10px] md:w-full w-[50px] h-[50px] md:py-[20px] py-[10px]`"
        :style="`background-color: ${borderColor}`"
      ></div>
      <ColorPicker v-if="showBorderPallete" @getColor="updateBorderColor" />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Border width</p>
      <input
        @change="updateBorderWidth"
        v-model="borderWidth"
        type="number"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
      />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Font Size</p>
      <input
        @change="updateFontSize"
        v-model="fontSize"
        type="number"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
      />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Text align</p>
      <select @change="updateTextAlign" class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border" name="" id="" v-model="textAlign">
      <option value="left" >left</option>
      <option value="right">right</option>
      <option value="center">center</option>
      </select>
    </div>
    
    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[13px]">Text color</p>
      <div
        @click="showTextColorPallete = !showTextColorPallete"
        :class="`cursor-pointer md:w-full w-[50px] h-[50px] md:px-[40px] px-[10px] md:py-[20px] py-[10px]`"
        :style="`background-color: ${textColor}`"
      ></div>
      <ColorPicker v-if="showTextColorPallete" @getColor="updateTextColor" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStructureStore } from "../../stores/structure";
import ColorPicker from "../ColorPicker.vue";

const bgColor = ref("#E5E5E5");
const borderColor = ref("#000000");
const textColor = ref("#000000");
const borderWidth = ref(0);
const noOfGrid = ref(1);
const fontSize = ref(16);
const textAlign = ref("left");
const showBgPallete = ref(false);
const showBorderPallete = ref(false);
const showTextColorPallete = ref(false);
const structureStore = useStructureStore();

const updateBackgroundColor = (color: any) => {
  bgColor.value = color;
  structureStore.applyBackgroundColor(bgColor.value);
};

const updateBorderColor = (color: any) => {
  borderColor.value = color;
  structureStore.applyBorderColor(borderColor.value);
};
const updateTextColor = (color: any) => {
  textColor.value = color;
  structureStore.applyTextColor(textColor.value);
};
const updateBorderWidth = () => {
  structureStore.applyBorderWidth(borderWidth.value);
};
const updateFontSize = () => {
  structureStore.applyFontSize(fontSize.value);
};

const updateTextAlign = () => {
  structureStore.applyTextAlign(textAlign.value);
};
</script>

<style></style>
