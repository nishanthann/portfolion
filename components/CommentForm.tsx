"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export default function CommentForm() {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      if (res.status === 401) {
        toast.info("Please log in to post a comment");
        return;
      }
      if (res.ok) {
        setContent("");
        router.refresh();
        toast.success("Comment submitted successfully"); // ✅ success toast
      }
    } catch (error) {
      console.error("Failed to submit comment", error);
      toast.error("Failed to submit comment"); // ✅ error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Textarea
        rows={3}
        maxLength={300}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Leave a comment..."
        className="resize-none pr-14 border-ring bg-background "
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (!content.trim() || isSubmitting) return;
            e.currentTarget.form?.requestSubmit();
          }
        }}
      />

      <Button
        type="submit"
        size="icon"
        variant={"ghost"}
        disabled={isSubmitting || !content.trim()}
        className="absolute bottom-2 right-2"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 text-amber-500 animate-spin" />
        ) : (
          <Send className="h-4 w-4 dark:text-primary" />
        )}
      </Button>
    </form>
  );
}
