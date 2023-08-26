import { defineStore } from "pinia";

export const useStructureStore = defineStore("structureStore", {
  state: () => ({
    structure: [{}],
    content: "example content",
  }),
  actions: {
    addElement() {
      this.structure.push({});
    },
  },
});
