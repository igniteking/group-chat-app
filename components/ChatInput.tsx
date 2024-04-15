"use client";
import React from "react";
import { Input } from "./ui/input";
import { createClient } from "@/utils/supabase/browser";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@/utils/store/user";
import { IMessages, useMessage } from "@/utils/store/messages";

function ChatInput() {
  const user = useUser((state) => state.user);
  const supabase = createClient();
  const addMessage = useMessage((state) => state.addMessage);
  const handleSendMessage = async (text: string) => {
    if (text.trim()) {
      const newMessage = {
        id: uuidv4(),
        message: text,
        send_by: user?.id,
        is_edit: false,
        created_at: new Date().toISOString(),
        users: {
          avatar: user?.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          display_name: user?.user_metadata.user_name,
          id: user?.id,
        },
      };

      addMessage(newMessage as IMessages);
      const { data, error } = await supabase
        .from("messages")
        .insert([{ message: text, is_edit: false }])
        .select();
      if (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Message can not be empty...");
    }
  };
  return (
    <div className="p-5 ">
      <Input
        placeholder="Send Message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default ChatInput;
