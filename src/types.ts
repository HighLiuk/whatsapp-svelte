export type Chat = {
  id: number;
  name: string;
  imgUrl: string;
};

export type Message = {
  id: number;
  text: string;
  time: string;
  received: boolean;
  first: boolean;
};
