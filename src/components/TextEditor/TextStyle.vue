<template>
  <section>
  <div class="mb-[30px]">
    <editor-content :editor="editor" />
  </div>
    <!-- <div class="flex flex-col items-center justify-center mt-[80px]">
      <p
        @click="addTextBlock('Header')"
        class="mb-[40px] bg-gray-300 shadow px-[30px] py-[16px] cursor-pointer font-[600] text-[30px] text-[#000]"
      >
        Heading
      </p>
      <p
        @click="addTextBlock('Subheader')"
        class="mb-[40px] bg-gray-300 shadow px-[30px] py-[16px] cursor-pointer font-[600] text-[24px] text-[#000]"
      >
        Subheading
      </p>
      <p
        @click="addTextBlock('Body')"
        class="mb-[40px] bg-gray-300 shadow px-[30px] py-[16px] cursor-pointer font-[600] text-[18px] text-[#000]"
      >
        Body
      </p>
      <p
        @click="addTextBlock('Link')"
        class="mb-[40px] bg-gray-300 shadow px-[30px] py-[16px] cursor-pointer font-[600] text-[14px] text-blue-500"
      >
        Link
      </p>
    </div> -->

    <div class="grid grid-cols-2 gap-[16px] items-start">
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'bg-black text-white': editor.isActive('bold') }"
      >
        bold
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'bg-black text-white': editor.isActive('italic') }"
      >
        italic
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'bg-black text-white': editor.isActive('strike') }"
      >
        strike
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'bg-black text-white': editor.isActive('code') }"
      >
        code
      </button>
      <button class="font-poppins p-[10px] text-[12px] border" @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </button>
      <button class="font-poppins p-[10px] text-[12px] border" @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'bg-black text-white': editor.isActive('paragraph') }"
      >
        paragraph
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 3 }) }"
      >
        h3
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'bg-black text-white': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'bg-black text-white': editor.isActive('bulletList') }"
      >
        bullet list
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'bg-black text-white': editor.isActive('orderedList') }"
      >
        ordered list
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'bg-black text-white': editor.isActive('codeBlock') }"
      >
        code block
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'bg-black text-white': editor.isActive('blockquote') }"
      >
        blockquote
      </button>
      <button class="font-poppins p-[10px] text-[12px] border" @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </button>
      <button class="font-poppins p-[10px] text-[12px] border" @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </button>
      <button class="font-poppins p-[10px] text-[12px] border"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTextStore } from "@/stores/textstore";
import { useStructureStore } from "@/stores/structure";

const textsStore = useTextStore();
const structureStore = useStructureStore();

const emit = defineEmits();

const editor = textsStore.editor

const addTextBlock = (style: string) => {
  textsStore.setDefautltTextStyle(style);
  structureStore.addTextToBlock();
};

</script>

<style scoped>
.text-block {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
