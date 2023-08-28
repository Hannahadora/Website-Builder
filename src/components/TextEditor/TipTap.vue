<template>
  <editor-content :editor="editor" content="jasdhkfiwoejkfhakjsd" />
</template>

<script setup>
import {onMounted} from 'vue'
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

import {useTextStore} from "@/stores/textstore";

const textsStore = useTextStore();
 
const editor = textsStore.editor

</script>
