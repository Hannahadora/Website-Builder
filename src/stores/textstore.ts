import { defineStore } from "pinia";
import { useStructureStore } from "./structure";

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
  textAlign?: string,
  config?: any
}

export const useTextStore = defineStore("textStore", {
  state: () => ({
    defaultStyle: null,
    content: "",
    textBlocks: <IBlock[]>[]
  }),
  actions: {
    setTextBlocks() {
      this.textBlocks = useStructureStore().blocks.filter((block: any) => block.type == 'text')
    },
    setTextConfig(json: any, index: number) {
      const textBlocks = this.textBlocks; 
      const textBlock = textBlocks[index];
      textBlock.config = json;
    }
  },
});
