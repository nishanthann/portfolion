import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params; // 👈 MUST await

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl min-h-screen mx-auto p-8 mt-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-sm text-muted-foreground mb-8">
        Published on {post.createdAt.toLocaleDateString()}
      </p>

      <article className="prose prose-neutral dark:prose-invert">
        {post.content}
      </article>
    </main>
  );
}
