<svelte:options
  customElement={{
    tag: "whatsapp-phone",
  }}
/>

<script lang="ts">
  import { Chat, Menu, Phone, Style } from "./components";
  import type { Chat as ChatType } from "./types";

  let chat: ChatType | null = null;

  export let data: string;

  function parse(data: string): ChatType[] {
    try {
      return JSON.parse(data) as ChatType[];
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  $: chats = parse(data);
</script>

<Style />
<Phone>
  {#if chat}
    <Chat {chat} onClose={() => (chat = null)} />
  {:else}
    <Menu onChatClick={(newChat) => (chat = newChat)} {chats} />
  {/if}
</Phone>
