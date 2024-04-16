"use client";

import { useMessage } from "@/utils/store/messages";
import React from "react";
import Message from "./Message";
import { DeleteAlert } from "./DeleteAlert";

async function ListMessages() {
  const messages = useMessage((state) => state.messages);
  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
      <div className="flex-1"></div>
      <div className="space-y-7">
        {messages!.map((value, index) => {
          return <Message message={value} key={index} />;
        })}
      </div>
      <DeleteAlert />
    </div>
  );
}

export default ListMessages;
