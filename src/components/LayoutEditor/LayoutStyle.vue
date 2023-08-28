<template>
  <section class="w-full md:block flex md:overflow-x-hidden overflow-x-scroll items-start gap-[10px] p-[10px]">
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

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[12px]">Background color</p>
      <div
        @click="showBgPallete = !showBgPallete"
        :class="`cursor-pointer md:px-[40px] px-[10px] md:w-full w-[50px] h-[50px] md:py-[20px] py-[10px]`"
        :style="`background-color:  ${bgColor}`"
      ></div>
      <ColorPicker v-if="showBgPallete" @getColor="updateBackgroundColor" />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[12px]">Border color</p>
      <div
        @click="showBorderPallete = !showBorderPallete"
        :class="`cursor-pointer md:px-[40px] px-[10px] md:w-full w-[50px] h-[50px] md:py-[20px] py-[10px]`"
        :style="`background-color: ${borderColor}`"
      ></div>
      <ColorPicker v-if="showBorderPallete" @getColor="updateBorderColor" />
    </div>

    <div class="md:mb-[30px] mb-[10px]">
      <p class="text-[12px]">Border width (px)</p>
      <input
        @change="updateBorderWidth"
        v-model="borderWidth"
        type="number"
        class="md:w-full w-[50px] h-[50px] md:px-[20px] px-[10px] py-[8px] border"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStructureStore } from "../../stores/structure";
import ColorPicker from "../ColorPicker.vue";

const bgColor = ref("#E5E5E5");
const borderColor = ref("#000000");
const borderWidth = ref(0);
const width = ref(100);
const height = ref(100);
const showBgPallete = ref(false);
const showBorderPallete = ref(false);
const structureStore = useStructureStore();

const updateBackgroundColor = (color: any) => {
  bgColor.value = color;
  structureStore.applyBackgroundColor(bgColor.value);
};

const updateBorderColor = (color: any) => {
  borderColor.value = color;
  structureStore.applyBorderColor(borderColor.value);
};
const updateBorderWidth = () => {
  structureStore.applyBorderWidth(borderWidth.value);
};
</script>

<style></style>
