<script>
import { useSideBarStore } from "@/stores/sidebar";
import { ref } from "vue";
import { useStructureStore } from "@/stores/structure";

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useSideBarStore();
    const structure = useStructureStore();
    const showContent = () => {
      store.toggleContent();
    };
    return { showContent, structure };
  },
};
</script>
<template>
  <div
    v-for="(item, index) in structure.structure"
    :key="index"
    class="border border-dashed border-red-700 w-1/2 h-[200px] flex justify-center items-center"
  >
    <button
      v-if="content === ''"
      class="w-[30px] font-[800] h-[30px] border border-green-500 flex items-center justify-center rounded-[50%] text-center text-green-500 text-[20px]"
      @click="showContent()"
    >
      +
    </button>
    <div v-else>{{ content }}</div>
  </div>
</template>
