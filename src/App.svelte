<script lang="ts">
  import Chat from "./Chat.svelte";
  import Layout from "./Layout.svelte";
  import Menu from "./Menu.svelte";
  import { currentChat } from "./stores/currentChat";
</script>

<Layout>
  {#if $currentChat}
    <Chat chat={$currentChat} onClose={() => ($currentChat = null)} />
  {:else}
    <Menu onChatClick={(chat) => ($currentChat = chat)} />
  {/if}
</Layout>
