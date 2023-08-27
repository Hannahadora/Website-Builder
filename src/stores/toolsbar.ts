import { defineStore } from "pinia";
import { useStructureStore } from "./structure";

export const useToolsStore = defineStore("toolsbar", {
  state: () => ({
    selectedTool: null,
    content: true,
    textEditor: false,
    structureEditor: false,
    imageEditor: false,
    buttonEditor: false,
    sectionEditor: false,
  }),
  actions: {
    toggleEditorStyle(key: any) {
      this.selectedTool = key
      this.textEditor = key === "text";
      this.structureEditor = key === "layout";
      this.imageEditor = key === "image";
      this.buttonEditor = key === "button";
      this.sectionEditor = key === "section";
      this.content = false; // Set this to false only if no editor is active
    },
    toggleContent() {
      this.content = !this.content;
    },
  },
});
