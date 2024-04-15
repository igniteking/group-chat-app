import { create } from "zustand";

export type IMessages = {
  created_at: string;
  id: string;
  is_edit: boolean;
  message: string;
  send_by: string;
  users: {
    avatar: string;
    created_at: string;
    display_name: string | null;
    id: string;
  } | null;
};

interface MessageState {
  messages: IMessages[];
  addMessage: (message: IMessages) => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
