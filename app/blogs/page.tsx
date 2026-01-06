import { TitleSection } from "@/components/ui/TitleSection";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  return (
    <main className="min-h-screen p-8 mt-12">
      <TitleSection
        title="Thoughts & Insights"
        description="A collection of my projects, tutorials, and reflections on design, development."
      />

      <Suspense fallback={<Spinner />}>
        <BlogList />
      </Suspense>
    </main>
  );
}
