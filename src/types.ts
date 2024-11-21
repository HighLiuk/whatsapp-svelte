export type Chat = {
  id: number;
  name: string;
  messages: Message[];
};

export type Message = {
  id: number;
  text: string;
  time: string;
  received: boolean;
};
