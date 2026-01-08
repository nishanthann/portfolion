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
  const handleCardClick = () => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent card click when clicking buttons
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
      <Card
        onClick={handleCardClick}
        className="
          overflow-hidden 
          relative 
          rounded-2xl 
          shadow-md 
          hover:shadow-2xl 
          
          h-[350px] 
          cursor-pointer
          hover:bg-accent/5
          active:scale-[0.99]
          transition-all
          duration-200
        "
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden -mt-6">
          <div className="absolute inset-0" />
          <Image
            src={image}
            alt={title}
            fill
            quality="75"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2 z-20">
            {website && (
              <button
                onClick={(e) => handleButtonClick(e, website)}
                className="
                  p-2 
                  rounded-full 
                  bg-primary
                  hover:bg-black
                  hover:text-amber-400
                  backdrop-blur-md 
                  transition
                  z-30
                  cursor-pointer
                "
                aria-label="Visit website"
              >
                <ExternalLink size={20} />
              </button>
            )}

            {github && (
              <button
                onClick={(e) => handleButtonClick(e, github)}
                className="
                  p-2 
                  rounded-full
                  bg-black 
                  hover:text-black
                  hover:bg-primary
                  text-amber-400
                 cursor-pointer
                  backdrop-blur-md 
                  transition
                  z-30
                "
                aria-label="View source code"
              >
                <Github size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <CardHeader>
          <CardTitle className="text-sm sm:text-m font-semibold line-clamp-1">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="-mt-7 px-2 sm:px-6">
          <p className="text-s sm:text-sm text-muted-foreground mb-4 line-clamp-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags.map((t, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-[8px] py-1 px-1 rounded-full"
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
