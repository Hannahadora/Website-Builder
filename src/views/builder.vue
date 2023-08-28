<template>
 <transition>
  <main class="relative">
    <ResultModal v-if="saveDesign" />
    <div class="md:px-[40px] px-[16px] bg-green-500 h-[50px] text-[#fff] w-full fixed top-0 z-[9999] flex items-center justify-between">
      <h5
        class="text-[18px] px-[10px] py-[7px] font-poppins italic text-center"
      >
        Design Board
      </h5>
      <button @click="saveDesign = !saveDesign"
        class="rounded text-[18px] px-[10px] py-[7px] font-poppins italic text-center bg-black text-white"
      >
        Save Design
      </button>
    </div>
    <div class="relative flex md:flex-row flex-col md:items-start mt-[50px]">
      <section class="md:w-[25%] w-full fixed left-0 top-0 z-[8888] pt-[50px]">
        <SideBar />
      </section>
      <section
        class="md:relative md:left-[25%] md:ml-[16px] md:mt-[16px] mt-[350px] md:w-[70%] mb-[50px]"
      >
        <div
          class="rounded bg-[#fff] shadow overflow-hidden md:px-[16px] px-[10px] md:pt-[16px] pt-[10px] pb-[100px]"
        >
          <Edit v-if="editMode" />
        </div>
      </section>
    </div>
  </main>
 </transition>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Edit from "@/components/Edit.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import ResultModal from "@/components/ResultModal.vue";

const route = useRoute();

const editMode = ref<Boolean>(true);
const saveDesign = ref<Boolean>(false);

const setEditMode = (val: Boolean) => {
  editMode.value = val;
};

watch(editMode, () => {
  editMode ? (route.query.mode = "edit") : (route.query.mode = "preview");
});
</script>
