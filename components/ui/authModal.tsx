"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, RectangleGogglesIcon } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  async function signinGithub() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: window.location.pathname,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logging in with GitHub...");
          onOpenChange(false);
        },
        onError: () => {
          toast.error("GitHub login failed");
        },
      },
    });
  }

  async function signinGmail() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: window.location.pathname,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logging in with Google...");
          onOpenChange(false);
        },
        onError: () => {
          toast.error("Google login failed");
        },
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm border-t-6 border-t-amber-500 bg-card">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Sign in with
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <Button
            className="w-full gap-2"
            variant="outline"
            onClick={signinGmail}
          >
            <RectangleGogglesIcon size={18} />
            Continue with Google
          </Button>

          <Button
            className="w-full gap-2"
            variant="outline"
            onClick={signinGithub}
          >
            <Github size={18} />
            Continue with GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
