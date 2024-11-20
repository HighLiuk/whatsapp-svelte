<script lang="ts">
  import { messageStore } from "./stores/messageStore";
  import LeftArrowIcon from "./components/LeftArrowIcon.svelte";
  import ReceivedMessage from "./components/RecievedMessage.svelte";
  import SentMessage from "./components/SentMessage.svelte";
  import type { Chat } from "./types";

  export let chat: Chat;
  export let onClose: () => void;
</script>

<div class="h-full w-full bg-accent flex flex-col">
  <div
    class="w-full bg-primary flex flex-row justify-between items-center pt-6 overflow-hidden"
  >
    <div class="flex flex-row items-center gap-1 text-base-100 px-2 py-3">
      <a href={"javascript:void(0)"} on:click={onClose}>
        <LeftArrowIcon />
      </a>

      <div class="avatar">
        <div class="w-7 rounded-full">
          <img alt="homer" src={chat.imgUrl} />
        </div>
      </div>

      <div class="flex items-center gap-1">
        <p class="font-bold ml-1 text-sm select-none">{chat.name}</p>
      </div>
    </div>
  </div>

  <!-- Chat Area -->
  <div
    class="flex flex-col gap-0 h-full flex-initial overflow-y-scroll box-content pr-6 w-full"
  >
    {#each $messageStore as message, idx (message.text + message.time)}
      <!-- Add space between received and sent messages -->
      {#if idx === 0 || message.received !== $messageStore[idx - 1].received}
        <div class="p-1"></div>
      {/if}
      {#if message.received}
        <ReceivedMessage
          text={message.text}
          first={message.first}
          time={message.time}
        />
      {:else}
        <SentMessage
          text={message.text}
          time={message.time}
          first={message.first}
        />
      {/if}
    {/each}
  </div>

  <div class="p-3 flex flex-row gap-1.5">
    <div
      class="h-10 flex-1 flex items-center rounded-full bg-base-100 shadow p-3"
    >
      <p class="text-base-content/70 text-sm select-none">Message</p>
    </div>
  </div>
</div>
