import { defineStore } from "pinia";


import { Editor } from '@tiptap/vue-3'
import StarterKit from "@tiptap/starter-kit";

export const useTextStore = defineStore("textStore", {
  state: () => ({
    defaultStyle: null,
    content: "",
    editor: new Editor({
      extensions: [
        StarterKit,
      ],
    content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  })
  }),
  actions: {
    setDefautltTextStyle(key: any) {
      this.defaultStyle = key
      this.content = key
    },
  },
});
