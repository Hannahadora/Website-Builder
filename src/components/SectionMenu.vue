<template>
    <section>
      
      <div class="grid grid-cols-3 gap-[16px]">
          <ContentCard>
              <Text />
              <h6 class="text-[20px] mt-[16px] font-medium text-[#333] text-center">Text</h6>
          </ContentCard>
          <ContentCard>
              <Image />
              <h6 class="text-[20px] mt-[16px] font-medium text-[#333] text-center">Image</h6>
          </ContentCard>
          <ContentCard>
              <Text />
              <h6 class="text-[20px] mt-[16px] font-medium text-[#333] text-center">Button</h6>
          </ContentCard>
          <ContentCard>
              <Text />
              <h6 class="text-[20px] mt-[16px] font-medium text-[#333] text-center">Shape</h6>
          </ContentCard>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import ContentCard from './ContentCard.vue';
  import Image from './icons/Image.vue';
  import Text from './icons/Text.vue';
  </script>
  
  
  <style>
  
  </style>