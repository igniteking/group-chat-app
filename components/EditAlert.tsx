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
import { useMessage } from "@/utils/store/messages";
import { createClient } from "@/utils/supabase/browser";
import { toast } from "sonner";
function EditAlert() {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const actionMessage = useMessage((state) => state.actionMessage);
  const supabase = createClient();

  const handleEdit = async () => {
    const messageText = inputRef.current.value.trim();
    if (messageText) {
      const { data, error } = await supabase
        .from("messages")
        .update({ message: messageText, is_edit: true })
        .eq("id", actionMessage?.id!)
        .select();

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Successfully edited the message...");
      }
      document.getElementById("edit-trigger")?.click();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="edit-trigger"></button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Edit Message</DialogTitle>
        </DialogHeader>
        <Input
          id="username"
          defaultValue={actionMessage?.message!}
          ref={inputRef}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleEdit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditAlert;
