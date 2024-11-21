<script lang="ts">
  import { Chat, Menu, Phone } from "./components";
  import type { Chat as ChatType } from "./types";

  let chat: ChatType | null = null;

  const chats: ChatType[] = [
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
  ];
</script>

<Phone>
  {#if chat}
    <Chat {chat} onClose={() => (chat = null)} />
  {:else}
    <Menu onChatClick={(newChat) => (chat = newChat)} {chats} />
  {/if}
</Phone>
