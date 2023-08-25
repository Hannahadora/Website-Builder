<template>
  <section>
    <div class="mb-[20px]">
      <h3 class="text-[28px] font-[600]">Contents</h3>
      <p class="text-[12px] font-light italic">
        * Select a content type by dragging to the desired section
      </p>
    </div>
    <div class="grid grid-cols-3 gap-[16px]">
      <ContentCard title="Text">
        <template #icon>
          <Text />
        </template>
        <template #draggable>
          <div class="w-full" ref="textRef" :style="style" style="position: fixed">
            <textarea name="" id="" cols="10" rows="10"></textarea>
          </div>
        </template>
      </ContentCard>

      <ContentCard title="Image">
        <template #icon>
          <Image />
        </template>
      </ContentCard>
      <ContentCard title="Button">
        <template #icon>
          <Button />
        </template>
      </ContentCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentCard from "./ContentCard.vue";
import Button from "./icons/Button.vue";
import Image from "./icons/Image.vue";
import Text from "./icons/Text.vue";
import { ref, onMounted } from "vue";

import { useDraggable } from "@vueuse/core";

const textRef = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(textRef, {
  initialValue: { x: 40, y: 40 },
});

onMounted(() => {
  console.log("textref", textRef);
});
</script>

<style></style>
