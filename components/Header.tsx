"use client";
import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/browser";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { GithubIcon } from "lucide-react";
import AuthPopUp from "./AuthPopUp";

function Header({ user }: { user: User | null }) {
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = () => {
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const handleLogout = async () => {
    const supabase = createClient();
    let { error } = await supabase.auth.signOut();
    router.refresh();
  };

  const handleEmailLogin = async () => {
    const { data, error } = await supabase.auth.signInAnonymously();
    console.log({ data, error });
    
  };
  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Group Chat</h1>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="text-sm text-gray-400">2 online</h1>
          </div>
        </div>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Button onClick={handleLogin}>
              <GithubIcon />
            </Button>
            <Button onClick={handleEmailLogin}>Login</Button>
            <AuthPopUp />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
