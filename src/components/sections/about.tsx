"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";

import env from "@/config/env";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  return (
    <SectionHeading text="About" id="about" className="overflow-hidden">
      <div className="flex items-center lg:h-[95vh]">
        <div className="relative flex-1 px-4 py-12 md:px-12">
          <h2 className="font-incognito text-2xl font-semibold md:text-5xl lg:text-4xl">
            Meet the Developer,
            <br />
            Not Just the Code
          </h2>

          <HeadingLine className="mt-6" lineWidth={40} />

          <div className="text-foreground/70 bg-muted/20 relative z-10 mx-auto mt-6 max-w-3xl rounded-lg border-2 border-dotted text-sm leading-relaxed backdrop-blur-3xl md:text-base">
            <div className="p-6">
              <p className="">
                I am an Electrical Engineering graduate who is currently
                exploring Full Stack Web Development to broaden my expertise in
                the field technology. My background in Electrical Engineering
                has provided me with a strong fundation in technology,
                problem-solving skills, and analytical thinking. Transitioning
                into the world of web development is a strategic step to become
                a more versatile and adaptive technology profesional.
              </p>
            </div>

            <div className="border-t-2 border-dotted p-6">
              <Button
                asChild
                size={"lg"}
                variant={"outline"}
                className="group border-2 font-medium"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative hidden h-full items-center justify-center border-l md:w-1/2 lg:flex">
          <div className="absolute inset-0 size-full">
            <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative py-4 md:w-72"
          >
            <div className="sticky top-8 h-auto w-full">
              <div className="bg-primary/10 absolute inset-0 rotate-3 rounded-2xl" />
              <div className="bg-primary/20 absolute inset-0 rotate-1 rounded-2xl" />

              <div className="bg-background relative rounded-2xl border-2 p-6 shadow-xl">
                <div className="text-center">
                  <div className="border-foreground/20 bg-muted/20 mb-4 overflow-hidden rounded-lg border-2 border-dashed p-4">
                    <img
                      src="/Profile.png"
                      alt="ASCII"
                      className="h-auto w-full rounded-lg object-cover object-center grayscale"
                    />
                  </div>
                  <h3 className="font-incognito text-lg font-semibold text-[#8cc2ff]">
                    Rachdian Muhammad Adha
                  </h3>
                  <h3 className="font-incognito text-sm font-semibold">
                    Full Stack Web Developer
                  </h3>
                  <div className="text-foreground/60 mt-1 font-mono text-sm">
                    <Badge
                      variant="outline"
                      className={cn("border-green-500/30 bg-green-500/10", {
                        "border-red-500/30 bg-red-500/10":
                          !env.NEXT_PUBLIC_AVAILABLE_STATUS,
                      })}
                    >
                      <div
                        className={cn(
                          "mr-1 h-2 w-2 animate-pulse rounded-full bg-green-500",
                          {
                            "bg-red-500": !env.NEXT_PUBLIC_AVAILABLE_STATUS,
                          }
                        )}
                      />
                      {!env.NEXT_PUBLIC_AVAILABLE_STATUS
                        ? "Not Available"
                        : "Available to Work"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default About;
