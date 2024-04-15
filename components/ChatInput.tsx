"use client";
import React from "react";
import { Input } from "./ui/input";

function ChatInput() {
  const handleSendMessage = (text: string) => {
    alert(text);
  };
  return (
    <div className="p-5 ">
      <Input
        placeholder="send message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
}

export default ChatInput;
