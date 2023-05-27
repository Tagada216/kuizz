import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

const socket = io(URL);

let connected: string = "";
socket.on("connect", () => {
  connected = "We got a signal!";
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});
