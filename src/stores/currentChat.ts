import { writable } from "svelte/store";
import type { Chat } from "../types";

export const currentChat = writable<Chat | null>(null);
