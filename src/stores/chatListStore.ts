import { writable } from "svelte/store";
import type { Chat } from "../types";

const chatStore = () => {
  const chatList: Chat[] = [
    {
      id: 0,
      name: "Homer Simpson",
      imgUrl: "/homer.jpg",
      verified: false,
    },
    {
      id: 1,
      name: "Bart Simpson",
      imgUrl: "/bart.jpg",
      verified: false,
    },
  ];

  const { subscribe, set, update } = writable(chatList);

  return {
    subscribe,
    set,
    addUser: (user: Chat) => update((data) => [...data, user]),
    removeUser: (id: number) =>
      update((data) => data.filter((u) => u.id !== id)),
  };
};

export const chatListStore = chatStore();
