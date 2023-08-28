import { defineStore } from "pinia";
import { useImageStore } from "./imagestore";
import { useTextStore } from "./textstore";

interface IBlock {
  type: string;
  content: string,
  backgroundColor?: string,
  borderColor: string,
  backgroundImage?: string,
  borderWidth: number,
  textColor?: string,
  fontSize?: number,
  width?: number,
  height?: number,
  textAlign?: string
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
      this.blocks.push({
        type: "layout", content: this.content, backgroundColor: "", borderColor: "", backgroundImage: "", borderWidth: 0, width: 200, height: 200 
      });
    },
    addImageToBlock() {
      this.blocks.push({
        type: "image", content: "", borderColor: "", backgroundImage: "", borderWidth: 0,  width: 100, height: 100
      });
    },
    addTextToBlock() {
      this.blocks.push({
        type: "text", content: this.content, backgroundColor: "", borderColor: "", borderWidth: 0, textColor: "",
        fontSize: 16, textAlign: ""
      });
    },
    duplicateBlock(index: number) {
      const duplicatedBlock = { ...this.blocks[index] };
      this.blocks.splice(index + 1, 0, duplicatedBlock);
    },
    deleteBlock(index: number) {
      this.blocks.splice(index, 1);
    },
    moveItemToBack(index: number) {
      const itemToMove = this.blocks.splice(index, 1)[0]; 
      this.blocks.push(itemToMove); 
    },
    
    moveItemToFront(index: number) {
      const itemToMove = this.blocks.splice(index, 1)[0];
      this.blocks.unshift(itemToMove);
    },
    applyImage(image: string) {
      this.selectedBlock.content = image
    },
    applyWidth(width: number) {
      this.selectedBlock.width = width
    },
    applyHeight(height: number) {
      this.selectedBlock.height = height
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
    applyFontSize(size: number) {
      this.selectedBlock.fontSize = size;
    },
    applyBackgroundImage(image: string) {
      this.selectedBlock.backgroundImage = image;
    },
    applyTextAlign(key: string) {
      this.selectedBlock.textAlign = key;
    },
    applyTextContent(content: any) {
      this.selectedBlock.content = content
    }
  },
});
