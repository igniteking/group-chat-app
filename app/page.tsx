import ChatInput from "@/components/ChatInput";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
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
        <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
          <div className="flex-1"></div>
          <div className="space-y-7">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
              return (
                <div key={value} className="flex gap-2">
                  <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <h1 className="font-bold">Zaidan</h1>
                      <h1 className="text-sm text-gray-400">
                        {new Date().toDateString()}
                      </h1>
                    </div>
                    <p className="text-gray-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis nobis suscipit quod, esse placeat non quaerat,
                      inventore itaque nemo fugiat vitae nisi corrupti
                      veritatis! Odit animi reiciendis tenetur illum obcaecati!
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ChatInput />
      </div>
      <InitUser user={user} />
    </main>
  );
}
