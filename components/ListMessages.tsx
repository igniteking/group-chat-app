"use client";
import { createClient } from "@/utils/supabase/browser";
import React from "react";

async function ListMessages() {
  const supabase = createClient();

  let { data: messages, error } = await supabase.from("messages").select("*");
  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
      <div className="flex-1"></div>
      <div className="space-y-7">
        {messages!.map((value) => {
          return (
            <div key={value.id} className="flex gap-2">
              <div className="h-10 w-10 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h1 className="font-bold">Zaidan</h1>
                  <h1 className="text-sm text-gray-400">{value.created_at}</h1>
                </div>
                <p className="text-gray-300">{value.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListMessages;
