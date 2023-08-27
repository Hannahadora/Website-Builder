<template>
  <section class="w-full mt-[80px]">
    <div class="mb-[30px]">
      <p class="text-[13px]">Background color</p>
      <div
        @click="showBgPallete = !showBgPallete"
        :class="`cursor-pointer px-[40px] py-[20px]`"
        :style="`background-color:  ${bgColor}`"
      ></div>
      <ColorPicker v-if="showBgPallete" @getColor="updateBackgroundColor" />
    </div>

    <div class="mb-[30px]">
      <p class="text-[13px]">Border color</p>
      <div
        @click="showBorderPallete = !showBorderPallete"
        :class="`cursor-pointer px-[40px] py-[20px]`"
        :style="`background-color: ${borderColor}`"
      ></div>
      <ColorPicker v-if="showBorderPallete" @getColor="updateBorderColor" />
    </div>

    <div class="mb-[30px]">
      <p class="text-[13px]">Border width</p>
      <input
        @change="updateBorderWidth"
        v-model="borderWidth"
        type="number"
        class="w-full px-[20px] py-[8px] border"
      />
    </div>
    
    <div class="mb-[30px]">
      <p class="text-[13px]">Text color</p>
      <div
        @click="showTextColorPallete = !showTextColorPallete"
        :class="`cursor-pointer px-[40px] py-[20px]`"
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
</script>

<style></style>
