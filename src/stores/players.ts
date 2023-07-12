import { defineStore } from "pinia";

export const usePlayerStore = defineStore({
  id: "player",
  state: () => ({
    name: "",
    seed: "",
    avatar: "",
    id: "",
  }),
});

export const usePlayersStore = defineStore({
  id: "players",
  state: () => ({
    list: [],
  }),
});
