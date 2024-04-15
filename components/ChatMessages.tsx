import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import { createClient } from "@/utils/supabase/server";
import InitMessage from "@/utils/store/initMessages";

async function ChatMessages() {
  const supabase = createClient();

  const { data } = await supabase.from("messages").select("*, users(*)");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ListMessages />
      <InitMessage messages={data || []} />
    </Suspense>
  );
}

export default ChatMessages;
