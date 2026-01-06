// components/BlogList.tsx
import prisma from "@/lib/db";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type BlogPostType = {
  id: string;
  slug: string;
  title: string;
  content: string;
  createdAt: Date;
};

export default async function BlogList() {
  let posts: BlogPostType[] = [];

  try {
    posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  if (posts.length === 0) {
    return (
      <p className="text-center text-muted-foreground mt-12">
        No blog posts yet.
      </p>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-12">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blogs/${post.slug}`}
          className="block group"
        >
          <Card className="transition-all duration-200 group-hover:shadow-lg border-l-4 border-l-primary -mt-5 gap-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold group-hover:underline">
                {post.title}
              </CardTitle>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </CardHeader>

            <CardContent className="space-y-2">
              <p className="text-muted-foreground line-clamp-2">
                {post.content}
              </p>

              <p className="text-sm text-muted-foreground">
                Published on {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
