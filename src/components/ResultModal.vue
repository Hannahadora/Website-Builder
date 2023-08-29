<template>
  <div class="absolute top-[0px] right-[50px] bg-[#fff] shadow w-[50%] p-[20px] z-[9999]">
    <input class="w-full border p-[16px] mb-[36px]" type="text" v-model="designName" placeholder="Design Name"/>

   <!-- <div>
    <p class="text-[18px] font-bold mb-[10px]">Texts</p>

    <p>{{ textsStore.textBlocks }}</p>
   </div> -->

   <div>
    <p class="text-[18px] font-bold mb-[10px]">Design Blocks</p>

    <p>{{ structureStore.blocks }}</p>
   </div>

    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTextStore } from "../stores/textstore";
import { useStructureStore } from "../stores/structure";

const structureStore = useStructureStore()
const textsStore = useTextStore()
const designName = ref("");
</script>

<style></style>
