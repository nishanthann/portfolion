import { Badge } from "@/components/ui/badge";

import {
  BetterAuth,
  CoPilot,
  Css,
  Express,
  Framer,
  Git,
  GitHub,
  JavaScript,
  MongoDB,
  Mongoose,
  Mui,
  NextJs,
  Node,
  Npm,
  Pnpm,
  Postgres,
  Postman,
  Prisma,
  React,
  ReactQuery,
  Redux,
  ShadCN,
  Tailwind,
  TypeScript,
  Vercel,
  VScode,
  Zod,
} from "./Icons";
import { TitleSection } from "./ui/TitleSection";

export function BadgeFormation() {
  return (
    <>
      <TitleSection
        title="Tools of the Trade"
        description="The tools, libraries, and frameworks that help me craft seamless digital experiences."
      />
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-4 p-6">
        {/* Row 🟡 */}
        <div className="flex gap-3 translate-x-0 sm:-translate-x-6">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <NextJs />
            </div>
            NextJS
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <React />
            </div>
            React
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Node />
            </div>
            NodeJS
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Express />
            </div>
            Express
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <VScode />
            </div>
            VScode
          </Badge>
        </div>

        {/* Row 2 */}
        <div className="flex gap-3 translate-x-0 sm:-translate-x-3">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <TypeScript />
            </div>
            TypeScript
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <JavaScript />
            </div>
            JavaScript
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Css />
            </div>
            CSS
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Tailwind />
            </div>
            Tailwind
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <ShadCN />
            </div>
            ShadCN
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Mui />
            </div>
            MUI
          </Badge>
        </div>

        {/* Row 3 */}
        <div className="flex gap-3 translate-x-0 sm:translate-x-0">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <MongoDB />
            </div>
            MongoDB
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Postgres />
            </div>
            PostgreSQL
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Mongoose />
            </div>
            Mongoose
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Prisma />
            </div>
            Prisma
          </Badge>
        </div>
        {/* Row 4 */}
        <div className="flex gap-3 translate-x-0 sm:translate-x-3">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Redux />
            </div>
            Redux
          </Badge>

          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <ReactQuery />
            </div>
            Tanstack Query
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <BetterAuth />
            </div>
            BetterAuth
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Postman />
            </div>
            Postman
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Framer />
            </div>
            Framer Motion
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Zod />
            </div>
            Zod
          </Badge>
        </div>
        {/* Row 5 */}
        <div className="flex gap-3 translate-x-0 sm:translate-x-6">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Git />
            </div>
            Git
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <GitHub />
            </div>
            GitHub
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <CoPilot />
            </div>
            CoPilot
          </Badge>
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Vercel />
            </div>
            Vercel
          </Badge>
        </div>

        {/* Row 6 */}
        <div className="flex gap-3 translate-x-0 sm:translate-x-1">
          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Npm />
            </div>
            npm
          </Badge>

          <Badge variant={"outline"} className="text-sm px-3 py-1">
            <div>
              <Pnpm />
            </div>
            Pnpm
          </Badge>
        </div>
      </div>
    </>
  );
}
