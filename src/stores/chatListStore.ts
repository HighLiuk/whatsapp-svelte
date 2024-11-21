import { writable } from "svelte/store";
import type { Chat } from "../types";

export const chatListStore = writable<Chat[]>([
  {
    id: 0,
    name: "Homer Simpson",
  },
  {
    id: 1,
    name: "Bart Simpson",
  },
]);
