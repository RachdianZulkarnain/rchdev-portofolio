"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Rchdev - Personal Portfolio",
      description:
        "My personal portofolio website showcasing my skills and projects",
      tags: [
        "Next.js",
        "Shadcn UI",
        "Tailwind CSS",
        "Typescript",
        "lucide-react",
        "Framer Motion",
        "PostgreSQL",
      ],
      github: "https://github.com/RachdianZulkarnain/rchdev-portofolio",
      image: "/projects/sc.png",
      live: "https://rachdian.vercel.app/",
      date: "Nov, 2025",
      status: "In Progress",
    },
    {
      title: "Homigo - Property Renting App",
      description:
        "Homigo is a property rental platform that simplifies finding and booking apartments, hotels, and villas. It offers secure payment integration and an intuitive interface for a seamless user experience.",
      tags: [
        "Next.js",
        "Shadcn UI",
        "Prisma ORM ",
        "Tailwind CSS",
        "Typescript",
        "Framer Motion",
        "PostgreSQL",
        "NextAuth",
        "Redis",
      ],
      github: "https://github.com/RachdianZulkarnain/final-project-web",
      image: "/projects/Homigo.png",
      live: "https://homigo-property.vercel.app",
      date: "Sep, 2025",
      status: "Not Finished Yet",
    },
    {
      title: "Pradiant Event Management",
      description:
        "Pradian is a platform for event ticketing where users can register as attendees or organizers. It enables users to purchase tickets with secure payment integration and provides tools for organizers to manage their events efficiently.",
      tags: [
        "Next.js",
        "Shadcn UI",
        "Prisma ORM ",
        "Tailwind CSS",
        "Typescript",
        "Tanstack Query",
        "NextAuth",
        "PostgreSQL",
        "Redis",
      ],
      github: "https://github.com/RachdianZulkarnain/pradian-app-web",
      image: "/projects/Pradian.png",
      live: "https://pradian-event.vercel.app",
      date: "Aug, 2025",
      status: "completed",
    },
    {
      title: "Microlab Studio",
      description:
        "Microlab Studio is a 3D printing service that transforms digital designs into real products with precision and speed. It offers a wide range of materials, professional prototyping, and custom manufacturing solutions to support innovation across industries.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Typescript",
        "Framer Motion",
        "Shadcn UI",
      ],
      github: "https://github.com/RachdianZulkarnain/Company-Profile",
      image: "/projects/microlab.png",
      live: "https://microlab-studio.vercel.app/",
      date: "Jul, 2025",
      status: "completed",
    },
  ];

  const tagColors = {
    Portfolio: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    Fullstack: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Personal: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Telegram: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Management: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Bot: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    Anime: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    Streaming: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
  };

  return (
    <SectionHeading id="projects" text="Projects">
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {project.date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        project.status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500"
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                    {project.title}
                  </h3>
                  <HeadingLine className="mt-3" />
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "border font-mono text-xs",
                        tagColors[tag as keyof typeof tagColors]
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="group/btn relative border-2 font-medium"
                    disabled={!project.github}
                  >
                    <a
                      href={project.github || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group/btn border-2 font-medium"
                    disabled={!project.live}
                  >
                    <a
                      href={project.live || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                      <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>

                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-1 h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-2 h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-3 h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-4 h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VIEW ALL PROJECTS ON GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default Projects;
