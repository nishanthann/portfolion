"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthModal from "./authModal";

export default function SignInButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true); // then open modal
  };

  return (
    <>
      <Button onClick={handleClick} className="text-black">
        Sign In
      </Button>

      <AuthModal open={open} onOpenChange={setOpen} />
    </>
  );
}
