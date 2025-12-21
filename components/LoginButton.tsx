"use client";

import SignInButton from "./ui/SignInButton";
import SignOutButton from "./SignOutButton";

type Session = {
  user?: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
} | null;

export default function LoginButton({ session }: { session: Session }) {
  if (!session) {
    return <SignInButton />;
  }

  return <SignOutButton />;
}
