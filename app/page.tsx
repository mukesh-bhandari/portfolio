import Image from "next/image";
import {  Github,  Linkedin } from "lucide-react";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div>
        <section className="realtive h-screen">
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <div className="w-32 h-32 mx-auto relative mb-6">
              <Image
                src="/logo.png"
                alt="profile pic"
                className="rounded-full object-cover"
                fill
                priority
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
              Mukesh Bhandari
            </h1>
            <div className="text-center mb-8">
              <span>typewriter text here </span>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                href=""
              >
                <Github></Github>
              </a>

              <a
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                href=""
              >
                <Linkedin></Linkedin>
              </a>
            </div>
          </div>
        </section>
        <TechStack></TechStack>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </main>
  );
}
