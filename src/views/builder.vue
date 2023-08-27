<template>
  <main>
    <div class="relative flex md:flex-row flex-col md:items-start">
      <section class="md:w-[25%] w-full fixed left-0 top-0 z-[9999]">
        <SideBar />
      </section>
      <section
        class="md:relative md:left-[25%] md:ml-[16px] md:mr-[24px] md:mt-[16px] mt-[350px] md:w-[70%]"
      >
        <h5
          @click="setEditMode(true)"
          :class="editMode && 'bg-green-500 text-[#fff]'"
          class="text-[14px] hover:border-green-400 rounded cursor-pointer px-[10px] py-[7px] border font-poppins italic text-center"
        >
          Design Board 😄
        </h5>
        <div
          class="mt-[10px] rounded bg-[#fff] shadow overflow-hidden p-[16px] p-[10px]"
        >
          <Edit v-if="editMode" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Edit from "@/components/Edit.vue";
import Preview from "@/components/Preview.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const editMode = ref<Boolean>(true);

const setEditMode = (val: Boolean) => {
  editMode.value = val;
};

watch(editMode, () => {
  editMode ? (route.query.mode = "edit") : (route.query.mode = "preview");
});
</script>
