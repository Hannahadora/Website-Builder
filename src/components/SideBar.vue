<template>
  <main class="h-screen w-full border border-green-500 bg-[#F7F7F7]">
    <div class="w-full flex items-start">
      <div class="w-[30%]">
        <ToolsBar />
      </div>
      <div class="w-[70%]">
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