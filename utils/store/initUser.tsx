"use client";
import React, { useEffect, useRef } from "react";
import { useUser } from "./user";
import { User } from "@supabase/supabase-js";

function InitUser({ user }: { user: User | null }) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useUser.setState({ user });
    }
    initState.current = true;
  }, []);

  return <></>;
}

export default InitUser;
