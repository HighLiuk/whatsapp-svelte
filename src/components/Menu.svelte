<script lang="ts">
  import type { Chat } from "../types";
  import blank from "../assets/blank.svg";

  export let onChatClick: (chat: Chat) => void;
  export let chats: Chat[] = [];
</script>

<div class="h-full w-full bg-base-100 flex flex-col relative">
  <div class="bg-primary pt-6">
    <div class="flex flex-row items-center gap-1 text-base-100 p-2">
      <div class="h-7 flex items-center">
        <p class="text-sm select-none ml-4">WhatsApp</p>
      </div>
    </div>
  </div>

  <div class="flex flex-col divide-y w-full overflow-y-scroll">
    {#each chats as chat}
      <a
        href={"javascript:void(0)"}
        on:click={() => onChatClick(chat)}
        class="flex flex-row gap-2 w-full items-center p-3"
      >
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img alt={chat.name} src={blank} />
          </div>
        </div>
        <p class="ml-1 text-sm select-none">{chat.name}</p>
      </a>
    {/each}
  </div>
</div>
