import { defineStore } from "pinia";
export const useActiveComponentStore = defineStore({
  id: "activeComponent",
  state: () => ({
    value: "start",
  }),
});
