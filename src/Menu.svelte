<script lang="ts">
  import { chatListStore } from "./stores/chatListStore";
  import type { Chat } from "./types";

  export let onChatClick: (chat: Chat) => void;
</script>

<div class="h-full w-full bg-base-100 flex flex-col relative">
  <div class="bg-primary pt-6">
    <div class="text-base-100 p-2 font-bold ml-1 text-sm select-none">
      WhatsApp
    </div>
  </div>

  <div class="flex flex-col divide-y w-full">
    {#each $chatListStore as chat (chat.name)}
      <a
        href={"javascript:void(0)"}
        on:click={() => onChatClick(chat)}
        class="flex flex-row gap-2 w-full items-center p-3"
      >
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img alt={chat.name} src={chat.imgUrl} />
          </div>
        </div>
        <p class="font-bold ml-1 text-sm select-none">{chat.name}</p>
      </a>
    {/each}
  </div>
</div>
