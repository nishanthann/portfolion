import { TitleSection } from "@/components/ui/TitleSection";

import BackButton from "@/components/BackButton";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import CommentActions from "@/components/CommentActions";
import CommentsSection from "@/components/CommentsSection";
import { Suspense } from "react";
import CommentsSkeleton from "@/components/CommentsSkeleton";

export default async function CommentPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="mt-20 min-h-screen">
      <div className="max-w-md px-8">
        <BackButton />
      </div>

      <TitleSection title="Let Me Know You Were Here" animate={false} />

      {/* CLIENT actions */}
      <div className="max-w-md mx-auto px-8 py-8 flex flex-col gap-6 -mt-20">
        <CommentActions session={session} />
        <h2 className="text-lg font-semibold">All Comments</h2>
      </div>

      {/* Comments */}
      {/* 👇 SUSPENSE HERE */}
      <Suspense fallback={<CommentsSkeleton />}>
        <CommentsSection currentUserId={session?.user?.id ?? null} />
      </Suspense>
    </div>
  );
}
