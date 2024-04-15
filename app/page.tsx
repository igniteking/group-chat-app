import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import Header from "@/components/Header";
import InitUser from "@/utils/store/initUser";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md flex flex-col">
        <Header user={user} />
        <ChatMessages />
        <ChatInput />
      </div>
      <InitUser user={user} />
    </main>
  );
}
