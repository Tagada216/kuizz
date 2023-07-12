import { defineStore } from "pinia";

export const useGamePropsStore = defineStore({
  id: "gameProps",
  state: () => ({
    id: "",
    waitBetweenRound: 5,
    roundTime: 30,
    name: "",
  }),
});
