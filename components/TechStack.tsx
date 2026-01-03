import { ChevronsLeftRight, CodeXml, Heading1, LayoutPanelTop, Server, Terminal } from "lucide-react";

export const TechStack = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
              <ChevronsLeftRight></ChevronsLeftRight>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              React
            </span>
          </div>
        </div>
         <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
              <CodeXml ></CodeXml>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              Next.js
            </span>
          </div>
        </div>
         <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
              <LayoutPanelTop ></LayoutPanelTop>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              Tailwind
            </span>
          </div>
        </div>
         <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
             <Terminal></Terminal>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              typescript
            </span>
          </div>
        </div>
         <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
             <Server></Server>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              Node.js
            </span>
          </div>
        </div>
          <div className="group relative p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-2 md:gap-3 z-10">
            <div className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-primary group-hover:scale-105 transition-transform duration-300 flex">
             <Heading1></Heading1>
            </div>
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 truncate">
              Svelte
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
