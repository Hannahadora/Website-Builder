<template>
  <main>
    <div class="flex items-start">
      <section class="w-[25%]">
        <SideBar />
      </section>
      <section class="ml-[16px] mr-[24px] mt-[16px] w-[70%]">
        <div class="flex items-center">
          <h5
            @click="setEditMode(true)"
            :class="editMode && 'bg-green-500 text-[#fff]'"
            class="text-[14px] hover:border-green-400 rounded cursor-pointer px-[10px] py-[7px] mr-[20px] border"
          >
            Edit
          </h5>
          <h5
            @click="setEditMode(false)"
            :class="!editMode && 'bg-green-500 text-[#fff]'"
            class="text-[14px] hover:border-green-400 rounded cursor-pointer px-[10px] py-[7px] border"
          >
            Preview
          </h5>
        </div>
        <div class="mt-[10px] rounded bg-[#fff]  p-[16px]">
          <Edit v-if="editMode" />
          <Preview v-else />
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
