import { defineStore } from "pinia";

export const useSideBarStore = defineStore("navStore", {
  state: () => ({
    content: true,
    textEditor: false,
    structureEditor: false,
    imageEditor: false,
    buttonEditor: false,
  }),
  actions: {
    toggleEditorStyle(key) {
      this.textEditor = key === "Text";
      this.structureEditor = key === "Structure";
      this.imageEditor = key === "Image";
      this.buttonEditor = key === "Button";
      this.content = false; // Set this to false only if no editor is active
    },
    toggleContent() {
      this.content = !this.content;
    },
  },
});
