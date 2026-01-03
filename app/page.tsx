"use client";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { TechStack } from "../components/TechStack";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import Typewriter from "typewriter-effect";
import { ThemeToggler } from "../components/ThemeToggler";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <ThemeToggler></ThemeToggler>
      <div className="space-y-24 pb-24">
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          {/* <BackgroundBeams/> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="animate-fade-in-up relative z-10">
            {" "}
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/profilepic.jpeg"
                alt="profile pic"
                className="rounded-full object-cover"
                fill
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mukesh Bhandari
            </h1>
            <div className="text-xl md:text-3xl text-center text-gray-600 dark:text-gray-300 mb-8 h-8">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                href="https://github.com/mukesh-bhandari/"
                target="_blank" rel="noopener noreferrer"
              >
                <Github></Github>
              </Link>

              <Link
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                href="https://www.linkedin.com/in/mukesh-bhandari-1147932a8/"
             target="_blank" rel="noopener noreferrer"
             >
                <Linkedin></Linkedin>
              </Link>
            </div>
          </div>
        </section>
        <TechStack></TechStack>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p> © 2025 | Mukesh Bhandari. All rights reserved</p>
      </footer>
    </main>
  );
}
