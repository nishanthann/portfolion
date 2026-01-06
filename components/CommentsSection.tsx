import prisma from "@/lib/db";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import DeleteCommentButton from "./DeleteCommentButton.tsx";

/* COLOR STYLES */
const CARD_COLOR_STYLES = [
  "border-l-cyan-500 shadow-cyan-500/20",
  "border-l-fuchsia-500 shadow-fuchsia-500/20",
  "border-l-emerald-500 shadow-emerald-500/20",
  "border-l-violet-500 shadow-violet-500/20",
  "border-l-rose-500 shadow-rose-500/20",
  "border-l-blue-500 shadow-blue-500/20",
  "border-l-lime-500 shadow-lime-500/20",
  "border-l-orange-500 shadow-orange-500/20",
  "border-l-amber-500 shadow-amber-500/20",
];

/* Helper */
const getCardStyle = (index: number) =>
  `border-l-4 ${CARD_COLOR_STYLES[index % CARD_COLOR_STYLES.length]}`;

export default async function CommentsSection({
  currentUserId,
}: {
  currentUserId: string | null;
}) {
  const comments = await prisma.comment.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      content: true,
      updatedAt: true,
      user: {
        select: { id: true, name: true, image: true },
      },
    },
  });

  if (comments.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center mt-6">
        No comments yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-24">
      {comments.map((comment, index) => (
        <Card
          key={comment.id}
          className={cn(
            `
                  group relative h-[140px]
                  flex flex-col justify-between
                  rounded-xl p-4
                  cursor-pointer
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:-translate-y-1
                  bg-background/30 backdrop-blur-xl
                  border border-border
                  shadow-2xl
                `,
            getCardStyle(index)
          )}
        >
          <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-2 p-0">
            {/* Avatar */}
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarImage src={comment.user.image ?? ""} />
              <AvatarFallback>
                {comment.user.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>

            {/* Name + Date */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="text-sm font-medium truncate">
                  {comment.user.name ?? "Anonymous"}
                </p>
              </div>

              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>
                  {new Date(comment.updatedAt).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Delete (hover only) */}
            <div>
              <DeleteCommentButton
                commentId={comment.id}
                ownerId={comment.user.id}
                currentUserId={currentUserId}
              />
            </div>
          </CardHeader>

          <CardContent className="pb-3 -mt-8 px-2 flex items-center">
            <p className="text-sm  line-clamp-2">{comment.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
