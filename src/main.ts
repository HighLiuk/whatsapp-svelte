import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
  props: {
    chats: [
      {
        id: 0,
        name: "Homer Simpson",
        messages: [
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
        ],
      },
      {
        id: 1,
        name: "Bart Simpson",
        messages: [
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
        ],
      },
    ],
  },
});

export default app;
