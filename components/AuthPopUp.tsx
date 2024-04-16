"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { createClient } from "@/utils/supabase/browser";

function AuthPopUp() {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const supabase = createClient();

  const handleRegisterwithEmail = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(data);
    console.log(error);
  };

  const handleLoginwithEmail = async () => {
    console.log("triggered");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(data);
    console.log(error);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="email-trigger"></button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Login / Register</DialogTitle>
        </DialogHeader>
        <Label htmlFor="email">Email</Label>
        <Input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="youremail@email.com"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="************"
        />

        <Button type="button" onClick={handleLoginwithEmail}>
          Login
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleRegisterwithEmail}
        >
          Register
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default AuthPopUp;
