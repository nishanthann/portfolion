import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { TitleSection } from "./ui/TitleSection";

export default function AboutSection() {
  return (
    <section className=" mx-auto px-6 py-16 max-w-5xl space-y-8">
      <TitleSection title="About Me" />
      {/* ABOUT + PHOTO */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 items-center">
        {/* Text */}
        <div>
          <p className="text-muted-foreground mb-4">
            Nishanthan Krishnarasa, a full-stack developer passionate about
            building dynamic, end-to-end web solutions. I excel at transforming
            complex challenges into clean, efficient code using React, Next.js,
            and Node.js. Continuously learning and adapting, I thrive in both
            frontend creativity and backend logic.
          </p>
          <p className="text-muted-foreground">
            Beyond coding, I stay curious—exploring new tech, ideas, and
            maintaining a balanced perspective on work and life.
          </p>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-self-end mr-4">
          <div className="relative w-36 h-36 hover:-rotate-9 rounded-2xl overflow-hidden shadow-md group transition-all duration-300">
            <Image
              src="/profile3.jpg"
              alt="Profile photo"
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
              priority
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* CERTIFICATES & EXPERIENCE ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CERTIFICATES & QUALIFICATIONS */}
        <Card className="bg-transparent bg-linear-to-tl from-primary/10 from-1% via-transparent to-transparent">
          <CardHeader>
            <CardTitle>Certifications & Qualifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>BTEC HND in Software Engineering (Ongoing)</li>
              <li>
                <Link
                  href="https://www.freecodecamp.org"
                  target="_blank"
                  className="underline hover:text-primary"
                >
                  freeCodeCamp – 2 Certifications
                </Link>
              </li>
              <li>Certificate in Accounting & Taxation</li>
            </ul>
          </CardContent>
        </Card>

        {/* EXPERIENCE */}
        <Card className="bg-transparent bg-linear-to-br from-primary/10 from-1% via-transparent to-transparent">
          <CardHeader className="m-0">
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground -mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
              <h3 className="font-normal text-foreground">
                Software Engineering Intern
              </h3>
              <span className="text-xs text-muted-foreground sm:text-right">
                6 Months Internship
              </span>
              <p className="text-[13px] line-clamp-2 sm:col-span-2">
                Gained hands-on experience in frontend and backend development,
                working with real-world applications and collaborative teams.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
              <h3 className="font-normal text-foreground">
                Junior Software Developer
              </h3>
              <span className="text-xs text-muted-foreground sm:text-right">
                6 Months – X Company
              </span>
              <p className="text-[13px] line-clamp-2 sm:col-span-2">
                Worked on full-stack web applications, implementing features,
                fixing bugs, and improving application performance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SKILLS */}
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

const skills = [
  "Understanding of full-stack web application architecture",

  "Creating reusable UI components and layouts",
  "Managing application state and data flow",
  "Implementing authentication and authorization flows",
  "Handling protected routes and access control",
  "Building forms with validation and user feedback",
  "Handling API loading, success, and error states",
  "Creating RESTful APIs with Express.js",

  "Using Next.js routing, layouts, and API routes",
  "Debugging frontend and backend issues effectively",
  "Using Git for version control and collaboration",
];
