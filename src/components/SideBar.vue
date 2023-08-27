<template>
  <main class="md:h-screen h-auto w-full border border-green-500 bg-[#F7F7F7]">
    <div class="w-full flex md:flex-row flex-col md:items-start items-center md:justify-start justify-between">
      <div class="md:w-[30%] w-full">
        <ToolsBar />
      </div>
      <div class="md:w-[70%] w-full">
        <ToolsSetup />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ToolsBar from "./ToolsBar.vue";
import ToolsSetup from "./ToolsSetup.vue";
</script>


<style>

</style>