<script lang="ts">
  import { Chat, Menu, Phone } from "./components";
  import type { Chat as ChatType } from "./types";

  let chat: ChatType | null = null;
</script>

<Phone>
  {#if chat}
    <Chat {chat} onClose={() => (chat = null)} />
  {:else}
    <Menu onChatClick={(newChat) => (chat = newChat)} />
  {/if}
</Phone>
