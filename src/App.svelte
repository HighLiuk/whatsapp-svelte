<script lang="ts">
  import { Chat, Menu, Phone } from "./components";
  import type { Chat as ChatType } from "./types";

  let chat: ChatType | null = null;

  const chats: ChatType[] = [
    {
      id: 0,
      name: "Homer Simpson",
    },
    {
      id: 1,
      name: "Bart Simpson",
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
