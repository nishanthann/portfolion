"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Comment = {
  id: string;
  userId: string;
};

type Session = {
  user?: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
} | null;

export default function DeleteCommentButton({
  comment,
  session,
}: {
  comment: Comment;
  session: Session;
}) {
  const router = useRouter();

  // Only show the delete button if the logged-in user owns the comment
  if (!session?.user?.id || session.user.id !== comment.userId) return null;

  const handleDelete = async () => {
    const res = await fetch(`/api/comments/${comment.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      toast.error("Failed to delete comment");
      return;
    }
    toast.success("Comment deleted successfully");
    router.refresh(); // Refresh the server component
  };

  return (
    <Trash2
      onClick={handleDelete}
      className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-destructive"
    />
  );
}
