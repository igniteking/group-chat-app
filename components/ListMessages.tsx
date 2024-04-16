"use client";

import { IMessages, useMessage } from "@/utils/store/messages";
import React, { useEffect } from "react";
import Message from "./Message";
import { DeleteAlert } from "./DeleteAlert";
import EditAlert from "./EditAlert";
import { createClient } from "@/utils/supabase/browser";
import { toast } from "sonner";

async function ListMessages() {
  const { messages, addMessage } = useMessage((state) => state);
  const supabase = createClient();
  useEffect(() => {
    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        async (payload) => {
          const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", payload.new.send_by)
            .single();
          if (error) {
            toast.error(error.message);
          } else {
            const newMessage = {
              ...payload.new,
              users: data,
            };
            addMessage(newMessage as IMessages);
          }
        }
      )
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
      <div className="flex-1"></div>
      <div className="space-y-7">
        {messages!.map((value, index) => {
          return <Message message={value} key={index} />;
        })}
      </div>
      <DeleteAlert />
      <EditAlert />
    </div>
  );
}

export default ListMessages;
