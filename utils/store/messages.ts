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
  actionMessage: IMessages | undefined;
  addMessage: (message: IMessages) => void;
  setActionMessage: (message: IMessages | undefined) => void;
  OptimisticdeleteMessage: (messageId: string) => void;
  OptimisticUpdateMessage: (message: IMessages) => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  actionMessage: undefined,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setActionMessage: (message) => set(() => ({ actionMessage: message })),
  OptimisticdeleteMessage: (messageId) =>
    set((state) => {
      return {
        messages: state.messages.filter((message) => message.id !== messageId),
      };
    }),
  OptimisticUpdateMessage: (updateMessage) =>
    set((state) => {
      return {
        messages: state.messages.filter((message) => {
          if (message) {
            if (message.id === updateMessage.id) {
              message.message = updateMessage.message;
              message.is_edit = updateMessage.is_edit;
            }
            return message;
          }
        }),
      };
    }),
}));
