"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash } from "lucide-react";
import { TitleSection } from "@/components/ui/TitleSection";

type CommentType = {
  id: number;
  text: string;
  userId: number;
};

export default function Page() {
  // Fake logged-in user
  const user = { id: 1, name: "Test User" };

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>([
    { id: 1, text: "First sample comment", userId: 1 },
    { id: 2, text: "Another user's comment", userId: 2 },
  ]);

  const handleAdd = () => {
    if (!comment.trim()) return;

    const newComment: CommentType = {
      id: Date.now(),
      text: comment,
      userId: user.id,
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="mt-30">
      <TitleSection title="Let Me Know You Were Here" />
      <div className="flex flex-col -mt-7  gap-6 max-w-md mx-auto px-8 py-10">
        {/* Sign in button */}
        <Button className="w-full">Sign In</Button>

        {/* Input section */}
        <div className="flex gap-2 w-full">
          <Input
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </div>

        {/* Comments list */}
        <div className="flex flex-col gap-3">
          {comments.length === 0 && (
            <p className="text-sm text-muted-foreground text-center">
              No comments yet
            </p>
          )}

          {comments.map((c) => (
            <Card key={c.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <span>{c.text}</span>

                {c.userId === user.id && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(c.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
