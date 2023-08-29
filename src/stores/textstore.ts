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
  configxx?: any
}

export const useTextStore = defineStore("textStore", {
  state: () => ({
    defaultStyle: null,
    content: "",
    textBlocks: <IBlock[]>[] = useStructureStore().blocks.filter((block: any) => block.type == 'text')
  }),
  actions: {
    setTextBlocks() {
      this.textBlocks = useStructureStore().blocks.filter((block: any) => block.type == 'text')
    },
    setTextConfigxx(json: any, index: number) {
      const textBlocks = this.textBlocks; 
      const textBlock = textBlocks[index];
      textBlock.configxx = json;
    }
  },
});
