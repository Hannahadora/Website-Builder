import { defineStore } from "pinia";


import { Editor } from '@tiptap/vue-3'
import StarterKit from "@tiptap/starter-kit";


import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'

export const useTextStore = defineStore("textStore", {
  state: () => ({
    defaultStyle: null,
    content: "",
    editor: new Editor({
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Dropcursor,
        Link.configure({
          openOnClick: false,
        }),
      ],
      content: '<p>Hello Text ... </p>',
    })
  }),
  actions: {
    setDefautltTextStyle(key: any) {
      this.defaultStyle = key
      this.content = key
    },
  },
});
