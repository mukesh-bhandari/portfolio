export const Experience = ()=>{
  return(
    <section  className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center"> Experience</h2>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Frontend Engineer
            </h3>
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">2025 - Present</span>
          </div>
          <div className="text-lg font-medium text-primary mb-2">Ltech Services</div>
          <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
            Built and maintained responsive web applications using React and Next.js, enhancing user experience and performance.
          </p>
        </div>
      </div>
    </section>
  )
}