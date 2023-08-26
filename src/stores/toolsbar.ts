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
  }),
  actions: {
    toggleEditorStyle(key: any) {
      this.selectedTool = key
      this.textEditor = key === "text";
      this.structureEditor = key === "layout";
      this.imageEditor = key === "image";
      this.buttonEditor = key === "button";
      this.content = false; // Set this to false only if no editor is active

      if(this.textEditor === true) {
        useStructureStore().addTextToBlock()
      }
    },
    toggleContent() {
      this.content = !this.content;
    },
  },
});
