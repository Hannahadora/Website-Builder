import { defineStore } from "pinia";
import { useImageStore } from "./imagestore";
import { useTextStore } from "./textstore";

interface IBlock {
  type: string; content: string
}

export const useStructureStore = defineStore("structureStore", {
  state: () => ({
    structure: [{}],
    content: "example content",
    blocks: <IBlock[]>[]
  }),

  actions: {
    addElement() {
      this.structure.push({});
    },
    addImageToBlock() {
      this.blocks.push({ type: "image", content: useImageStore().image });
    },
    addTextToBlock() {
      this.blocks.push({ type: "text", content: useTextStore().content || this.content });
    }
  },
});
