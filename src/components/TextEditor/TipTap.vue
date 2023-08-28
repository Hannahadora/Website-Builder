<template>
  <section class="relative">
    <div
      class="z-[20] absolute top-0 right-0" :class="`${
        structureStore.selectedBlockIndex === index ? 'block' : 'hidden'
      }`"
    >
      <div @click="showActions = !showActions"
        class="bg-[#fff] px-[10px] py-[10px] float-right cursor-pointer mb-[20px] shadow"
      >
        <Menu />
      </div>
      <div v-if="showActions"
        class="bg-[#fff] shadow p-[8px] min-w-[150px] h-[150px] overflow-y-scroll z-[20]"
      >
        <BlockAction :index="index" />
        <div class="flex flex-wrap items-center gap-[16px]">
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleBold().run(); showActions = false"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
          >
            bold
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleItalic().run(); showActions = false"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
          >
            italic
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleStrike().run(); showActions = false"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
          >
            strike
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleCode().run(); showActions = false"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'is-active': editor.isActive('code') }"
          >
            code
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().unsetAllMarks().run(); showActions = false"
          >
            clear marks
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().clearNodes().run(); showActions = false"
          >
            clear nodes
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().setParagraph().run(); showActions = false"
            :class="{ 'is-active': editor.isActive('paragraph') }"
          >
            paragraph
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            h1
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            h2
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            h3
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          >
            h4
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          >
            h5
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleHeading({ level: 6 }).run(); showActions = false"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          >
            h6
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleBulletList().run(); showActions = false"
            :class="{ 'is-active': editor.isActive('bulletList') }"
          >
            bullet list
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleOrderedList().run(); showActions = false"
            :class="{ 'is-active': editor.isActive('orderedList') }"
          >
            ordered list
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleCodeBlock().run(); showActions = false"
            :class="{ 'is-active': editor.isActive('codeBlock') }"
          >
            code block
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().toggleBlockquote().run(); showActions = false"
            :class="{ 'is-active': editor.isActive('blockquote') }"
          >
            blockquote
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().setHorizontalRule().run(); showActions = false"
          >
            horizontal rule
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().setHardBreak().run(); showActions = false"
          >
            hard break
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().undo().run(); showActions = false"
            :disabled="!editor.can().chain().focus().undo().run()"
          >
            undo
          </button>
          <button
            class="text-[10px] text-left font-[800] hover:bg-[#e4e4e4] cursor-pointer border px-[8px] py-[8px]"
            @click="editor.chain().focus().redo().run(); showActions = false"
            :disabled="!editor.can().chain().focus().redo().run()"
          >
            redo
          </button>
        </div>
      </div>
    </div>

    <editor-content :editor="editor" :style="{color: item.textColor, fontSize: `${item.fontSize}px`, textAlign: item.textAlign}" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BlockAction from "../BlockAction.vue";
import Menu from "../icons/Menu.vue";

import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

import { useTextStore } from "../../stores/textstore";
import { useStructureStore } from "../../stores/structure";

const textsStore = useTextStore();
const structureStore = useStructureStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const showActions = ref<Boolean>(false);

const editor = new Editor({
  content: "<p>Start Typing...</p>",
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    structureStore.applyTextContent(html);
    const json = editor.getJSON();
    textsStore.setTextConfigxx(json, props.index)
  },
});
</script>

<style lang="css">
.ProseMirror {
  padding: 20px;
}
.ProseMirror:focus {
  outline: none !important;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(6, 112, 6);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8be873;
}
</style>
