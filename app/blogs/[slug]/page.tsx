import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card key={post.id} className="mt-12 border">
        <CardHeader>
          <CardTitle className="text-3xl font-bold ">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            By Nishanthan Krishnarasa
          </p>
        </CardHeader>

        <CardContent className="space-y-6 mt-4 ">
          {post.content.split("\n\n").map((para, idx) => {
            // Detect headings by simple markdown style (### or ##)
            if (para.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-semibold  mt-4">
                  {para.replace("### ", "")}
                </h3>
              );
            } else if (para.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold  mt-6">
                  {para.replace("## ", "")}
                </h2>
              );
            } else if (para.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-3xl font-bold  mt-8">
                  {para.replace("# ", "")}
                </h1>
              );
            }
            // Normal paragraph
            return (
              <p key={idx} className=" leading-relaxed">
                {para}
              </p>
            );
          })}
        </CardContent>
      </Card>
      {/* <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-sm text-muted-foreground mb-8">
        Published on {post.createdAt.toLocaleDateString()}
      </p>

      <article className="prose prose-neutral dark:prose-invert">
        {post.content}
      </article> */}
    </main>
  );
}
