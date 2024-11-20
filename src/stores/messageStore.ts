import { writable } from "svelte/store";
import type { Message } from "../types";

const createMessageStore = () => {
  const messageList: Message[] = [
    {
      id: 0,
      text: "My favorite quotes of Homer Simpson",
      time: "3:14 PM",
      received: true,
    },
    {
      id: 1,
      text: "Maybe, just once, someone will call me 'Sir', without adding 'you are making a scene'.",
      time: "3:15 PM",
      received: true,
    },
    {
      id: 2,
      text: "Doh!",
      time: "3:16 PM",
      received: false,
    },
    {
      id: 3,
      text: "Doh!",
      time: "3:16 PM",
      received: false,
    },
    {
      id: 4,
      text: "Doh!",
      time: "3:16 PM",
      received: true,
    },
    {
      id: 5,
      text: "Doh!",
      time: "3:16 PM",
      received: true,
    },
    {
      id: 6,
      text: "Doh!",
      time: "3:16 PM",
      received: true,
    },
    {
      id: 7,
      text: "Doh!",
      time: "3:16 PM",
      received: false,
    },
  ];

  const { subscribe, set, update } = writable(messageList.slice().reverse());

  return {
    subscribe,
    set,
    addMessage: (message: Message) => update((data) => [...data, message]),
    removeMessage: (id: number) =>
      update((data) => data.filter((u) => u.id !== id)),
  };
};

export const messageStore = createMessageStore();
