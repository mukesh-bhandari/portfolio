import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center"> </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
            <Image
              src="/wallpaper.png"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="project"
              fill
            ></Image>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <Github></Github>
              </a>
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <ExternalLink></ExternalLink>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              EasyCSIT
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto
              a quibusdam laudantium iste consequatur numquam, doloremque harum
              soluta libero id. Temporibus minus quam quis quasi aliquam culpa,
              quidem ullam.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
            </div>
          </div>
        </article>
         <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
            <Image
              src="/wallpaper.png"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="project"
              fill
            ></Image>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <Github></Github>
              </a>
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <ExternalLink></ExternalLink>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Expense Tracker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto
              a quibusdam laudantium iste consequatur numquam, doloremque harum
              soluta libero id. Temporibus minus quam quis quasi aliquam culpa,
              quidem ullam.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
            </div>
          </div>
        </article>
         <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
            <Image
              src="/wallpaper.png"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="project"
              fill
            ></Image>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <Github></Github>
              </a>
              <a
                className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                href=""
              >
                <ExternalLink></ExternalLink>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Personal Asistant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto
              a quibusdam laudantium iste consequatur numquam, doloremque harum
              soluta libero id. Temporibus minus quam quis quasi aliquam culpa,
              quidem ullam.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                lorem
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
