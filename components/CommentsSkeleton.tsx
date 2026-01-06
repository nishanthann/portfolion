import { Card } from "@/components/ui/card";

export default function CommentsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-24 ">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card
          key={i}
          className="h-[140px] rounded-xl p-4 animate-pulse bg-muted"
        />
      ))}
    </div>
  );
}
