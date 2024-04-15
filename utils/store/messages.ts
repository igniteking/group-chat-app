import { User } from "@supabase/supabase-js";
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
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
}));
