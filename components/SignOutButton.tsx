"use client";

import { Button } from "@/components/ui/button";
import useSignout from "@/hooks/use-signout";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const signOut = useSignout();

  return (
    <Button
      variant="default"
      onClick={signOut}
      className="flex items-center gap-2 text-black"
    >
      <LogOut className="h-4 w-4" />
      Sign out
    </Button>
  );
}
