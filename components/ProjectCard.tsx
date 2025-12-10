"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import Image from "next/image";

export interface Tag {
  label?: string;
  icon: React.ReactNode;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  website?: string;
  github?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  website,
  github,
}: ProjectCardProps) => {
  return (
    <div
      className="
    group 
    transform 
    transition 
    duration-300 
    ease-out
    hover:scale-[1.04] 
    hover:-translate-y-1.5
  "
    >
      <Card className="overflow-hidden relative rounded-2xl shadow-md hover:shadow-2xl transition-shadow h-[350px] ">
        {/* Image */}
        <div className="relative h-52 overflow-hidden -mt-6">
          <div className="absolute inset-0 " />
          <Image
            src={image}
            alt={title}
            fill
            loading="eager"
            quality="75"
            className="object-cover "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2  z-20">
            {website && (
              <a
                href={website}
                target="_blank"
                className="
                            p-2 rounded-full 
                            bg-neutral-200/80 dark:bg-neutral-800/60
                            hover:bg-primary/30 
                            backdrop-blur-md 
                            transition
                            "
              >
                <ExternalLink size={20} />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                className="
                            p-2 rounded-full 
                            bg-neutral-200/80 dark:bg-neutral-800/60
                            hover:bg-primary/30 
                            backdrop-blur-md 
                            transition
                            "
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <CardHeader>
          <CardTitle className="text-sm sm:text-m font-semibold line-clamp-1">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="-mt-7">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags.map((t, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-[8px] py-1 px-1 rounded-full "
              >
                <div>{t.icon}</div>
                {t.label && <span>{t.label}</span>}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
