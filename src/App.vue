<template>
  <main>
    <h2>{{ message }}</h2>

    <div v-if="activeComponent.value === 'start'">
      <Start />
    </div>
    <div v-if="activeComponent.value === 'lobby'">
      <Lobby />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useActiveComponentStore } from "./stores/activeComponent";
import Lobby from "./components/Lobby.vue";
import Start from "./components/Start.vue";
import { useSocketOn } from "./services/socket";
import { ref } from "vue";

let message = ref(useSocketOn("connect"));

let activeComponent = useActiveComponentStore();
</script>

<style scoped></style>
