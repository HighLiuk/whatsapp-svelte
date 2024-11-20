<script lang="ts">
  import Chat from "./Chat.svelte";
  import Menu from "./Menu.svelte";
  import Phone from "./Phone.svelte";
  import { currentChat } from "./stores/currentChat";
</script>

<Phone>
  {#if $currentChat}
    <Chat chat={$currentChat} onClose={() => ($currentChat = null)} />
  {:else}
    <Menu onChatClick={(chat) => ($currentChat = chat)} />
  {/if}
</Phone>
