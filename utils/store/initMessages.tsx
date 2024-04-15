"use client";
import React, { useEffect, useRef } from "react";
import { User } from "@supabase/supabase-js";
import { IMessages, useMessage } from "./messages";

function InitMessage({ messages }: { messages: IMessages[] }) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useMessage.setState({ messages });
    }
    initState.current = true;
  }, []);

  return <></>;
}

export default InitMessage;
