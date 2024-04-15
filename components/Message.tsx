import { IMessages } from "@/utils/store/messages";
import Image from "next/image";
import React from "react";

function Message({ message }: { message: IMessages }) {
  return (
    <div className="flex gap-2">
      <div>
        <Image
          src={message.users?.avatar!}
          alt={`${message.users?.display_name}_pic`}
          className=" rounded-full ring-2"
          width={40}
          height={40}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <h1 className="font-bold">{message.users?.display_name}</h1>
          <h1 className="text-sm text-gray-400">
            {new Date(message.created_at).toDateString()}
          </h1>
        </div>
        <p className="text-gray-300">{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
