import { defineStore } from "pinia";
import { useImageStore } from "./imagestore";
import { useTextStore } from "./textstore";

interface IBlock {
  type: string;
  content: string,
  backgroundColor: string,
  borderColor: string,
  backgroundImage: string,
  borderWidth: number,
  textColor: string
}

export const useStructureStore = defineStore("structureStore", {
  state: () => ({
    structure: [{}],
    content: "example content",
    blocks: <IBlock[]>[],
    backgroundColor: "",
    borderColor: "",
    selectedBlock: <IBlock>{},
    selectedBlockIndex: <Number>0,
  }),

  actions: {
    selectBlock(index: any) {
      this.selectedBlock = this.blocks[index];
      this.selectedBlockIndex = index
    },
    addElement() {
      this.blocks.push({ type: "layout", content: this.content, backgroundColor: "", borderColor: "", backgroundImage: "", borderWidth: 0, textColor: "" });
    },
    addImageToBlock() {
      this.blocks.push({ type: "image", content: useImageStore().image, backgroundColor: "", borderColor: "", backgroundImage: "", borderWidth: 0, textColor: "" });
    },
    addTextToBlock() {
      this.blocks.push({ type: "text", content: useTextStore().content || this.content, backgroundColor: "", borderColor: "", backgroundImage: "", borderWidth: 0, textColor: "" });
    },
    duplicateBlock(index: number) {
      const duplicatedBlock = { ...this.blocks[index] };
      this.blocks.splice(index + 1, 0, duplicatedBlock);
    },
    deleteBlock(index: number) {
      this.blocks.splice(index, 1);
    },
    applyBackgroundColor(color: string) {
      this.selectedBlock.backgroundColor = color;
    },
    applyBorderColor(color: string) {
      this.selectedBlock.borderColor = color;
    },
    applyTextColor(color: string) {
      this.selectedBlock.textColor = color;
    },
    applyBorderWidth(width: number) {
      this.selectedBlock.borderWidth = width;
    },
    applyBackgroundImage(image: string) {
      this.selectedBlock.backgroundImage = image;
    }
  },
});
