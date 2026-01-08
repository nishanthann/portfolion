"use client";

import CommentForm from "./CommentForm";
import LoginButton from "./LoginButton";

type Session = {
  user?: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
} | null;

export default function CommentActions({ session }: { session: Session }) {
  return (
    <>
      <LoginButton session={session} />

      <CommentForm />
    </>
  );
}
