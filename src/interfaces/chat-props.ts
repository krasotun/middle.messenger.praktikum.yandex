export interface IChatProps {
  id: number;
  title: string;
  created_by: number;
  avatar: null | string;
  unread_count: number;
  last_message?: {
    user?: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    } | null;
    time: string;
    content: string;
  } | null;
}
