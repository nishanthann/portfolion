"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteCommentButton({
  commentId,
  ownerId,
  currentUserId,
}: {
  commentId: string;
  ownerId: string;
  currentUserId: string | null;
}) {
  const router = useRouter();

  // permission check
  if (!currentUserId || currentUserId !== ownerId) return null;

  const handleDelete = async () => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      toast.error("Failed to delete comment");
      return;
    }

    toast.success("Comment deleted");
    router.refresh();
  };

  return (
    <Trash2
      onClick={handleDelete}
      className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-destructive"
    />
  );
}
