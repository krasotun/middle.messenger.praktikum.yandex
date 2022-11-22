export interface IMessage {
  id: number;
  user_id: string;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: any;
  isMine: boolean;
}
