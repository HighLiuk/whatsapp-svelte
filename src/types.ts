export type Chat = {
  name: string;
  messages: Message[];
};

export type Message = {
  text: string;
  time: string;
  received: boolean;
};
