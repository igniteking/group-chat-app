import { IMessages } from "@/utils/store/messages";
import Image from "next/image";
import React from "react";
import { Actions } from "./Actions";
import { useUser } from "@/utils/store/user";

function Message({ message }: { message: IMessages }) {
  const user = useUser((state) => state.user);
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="font-bold">{message.users?.display_name}</h1>
            <h1 className="text-sm text-gray-400">
              {new Date(message.created_at).toDateString()}
            </h1>
          </div>
          {message.users?.id === user?.id ? <Actions /> : null}
        </div>
        <p className="text-gray-300">{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
