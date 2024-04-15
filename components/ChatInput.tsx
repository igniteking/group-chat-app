"use client";
import React from "react";
import { Input } from "./ui/input";
import { createClient } from "@/utils/supabase/browser";
import { toast } from "sonner";

function ChatInput() {
  const handleSendMessage = async (text: string) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("messages")
      .insert([{ message: text, is_edit: false }])
      .select();
    if (error) {
      toast.error(error.message);
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
