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
    },
    duplicateBlock(index: number) {
      const duplicatedBlock = { ...this.blocks[index] };
      this.blocks.splice(index + 1, 0, duplicatedBlock);
    },
    deleteBlock(index: number) {
      this.blocks.splice(index, 1);
    }
  },
});
