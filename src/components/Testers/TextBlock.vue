<template>
    <div class="text-block" contenteditable @input="updateContent">{{ content }}</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps({
    content: String
  });
  
  const emit = defineEmits();
  
  const updateContent = (event: InputEvent) => {
    emit('update:content', (event.target as HTMLElement).textContent);
  };
  </script>
  
  <style scoped>
  .text-block {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  