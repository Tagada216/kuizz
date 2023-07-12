import { defineStore } from "pinia";

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    list: [{ name: "", id: "" }],
  }),
});
