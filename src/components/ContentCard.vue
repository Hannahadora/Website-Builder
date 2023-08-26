<script>
import { useSideBarStore } from "@/stores/sidebar";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useSideBarStore();
    const showStyle = () => {
      store.toggleEditorStyle(props.title);
    };
    return { showStyle };
  },
};
</script>
<template>
  <div class="border border-green-500 rounded-[5px] max-w-[100px] cursor-move">
    <div
      class="py-[16px] px-[16px] flex flex-col items-center justify-center"
      @click="showStyle()"
    >
      <slot name="icon"></slot>
      <slot name="draggable"></slot>

      <h6 class="text-[16px] mt-[16px] text-[#333] text-center">
        {{ title }}
      </h6>
    </div>
  </div>
</template>

<style></style>
