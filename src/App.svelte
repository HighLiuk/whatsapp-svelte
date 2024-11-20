<script lang="ts">
  import { Chat, Menu, Phone } from "./components";
  import { currentChat } from "./stores/currentChat";
</script>

<Phone>
  {#if $currentChat}
    <Chat chat={$currentChat} onClose={() => ($currentChat = null)} />
  {:else}
    <Menu onChatClick={(chat) => ($currentChat = chat)} />
  {/if}
</Phone>
