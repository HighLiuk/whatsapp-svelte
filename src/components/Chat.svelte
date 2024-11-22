<script lang="ts">
  import { LeftArrowIcon, ReceivedMessage, SentMessage } from "./Chat";
  import type { Chat } from "../types";
  import blank from "../assets/blank.svg";

  export let chat: Chat;
  export let onClose: () => void;

  $: messages = [...chat.messages].reverse();
  $: count = messages.length;
</script>

<div class="h-full w-full bg-accent flex flex-col">
  <div class="bg-primary pt-6">
    <div class="flex flex-row gap-1 text-base-100 p-2">
      <a
        href={"javascript:void(0)"}
        class="w-7 rounded-full flex justify-center items-center"
        on:click={onClose}
      >
        <LeftArrowIcon />
      </a>

      <div class="avatar">
        <div class="w-7 rounded-full">
          <img alt={chat.name} src={blank} />
        </div>
      </div>

      <div class="flex items-center gap-1">
        <p class="ml-1 text-sm select-none">{chat.name}</p>
      </div>
    </div>
  </div>

  <!-- Chat Area -->
  <div
    class="flex flex-col-reverse gap-0 h-full flex-initial overflow-y-scroll box-content
  pr-6 w-full pb-1"
  >
    <!-- div that takes remaining space -->
    <div class="flex-1"></div>

    {#each messages as message, idx}
      <!-- Add space between received and sent messages -->
      {#if idx > 0 && message.received !== messages[idx - 1].received}
        <div class="p-1"></div>
      {/if}

      {#if message.received}
        <ReceivedMessage
          text={message.text}
          first={idx === count - 1 ||
            (idx < count - 1 &&
              message.received !== messages[idx + 1].received)}
          time={message.time}
        />
      {:else}
        <SentMessage
          text={message.text}
          first={idx === count - 1 ||
            (idx < count - 1 &&
              message.received !== messages[idx + 1].received)}
          time={message.time}
        />
      {/if}
    {/each}

    <div class="p-1"></div>
  </div>

  <div class="p-3 flex flex-row gap-1.5">
    <div
      class="h-10 flex-1 flex items-center rounded-full bg-base-100 shadow p-3"
    >
      <p class="text-base-content/70 text-sm select-none">Message</p>
    </div>
  </div>
</div>
