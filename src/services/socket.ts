import { io, Socket } from "socket.io-client";
import { ref, onUnmounted } from "vue";

// Initialize socket connection
const socket: Socket = io("http://localhost:3000");

// Function to listen to server event
export function useSocketOn(eventName: string) {
  const data = ref<any>(null);

  // Create event listener
  socket.on(eventName, (update: any) => {
    data.value = "We got a signal !";
  });

  // Remove event listener when component unmounts
  onUnmounted(() => {
    socket.off(eventName);
  });

  return data;
}

// Function to emit event to server
export function useSocketEmit(eventName: string, payload?: any) {
  socket.emit(eventName, payload);
}
