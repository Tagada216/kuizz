<template>
  <div>
    <img alt="Vue logo" class="logo" :src="logoImg" width="250" height="125" />
    <div class="btn_container">
      <button class="primary_btn" @click="createGame">Create Game</button>
      <button class="primary_btn" @click="">Quickplay</button>
      <button class="primary_btn" @click="">List Games</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from "../assets/logo_kuizz_full.png";
import { useActiveComponentStore } from "../stores/activeComponent";

const activeComponent = useActiveComponentStore();

function createGame() {
  let data = { name: "test" };
  activeComponent.value = "lobby";
}
</script>

<style scoped></style>
