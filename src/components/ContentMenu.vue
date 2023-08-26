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

</script>

<style></style>
