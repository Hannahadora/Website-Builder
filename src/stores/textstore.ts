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
    content: '<p>Hello Text ... 😀</p>',
  })
  }),
  actions: {
    setDefautltTextStyle(key: any) {
      this.defaultStyle = key
      this.content = key
    },
  },
});
