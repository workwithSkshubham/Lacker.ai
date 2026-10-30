const steps = [
  {
    number: "01",
    title: "Connect Your Codebase",
    description: "Link your GitHub, GitLab, or Bitbucket repository. Lacker.ai securely indexes your code to understand your project's architecture and patterns.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    title: "Describe What You Need",
    description: "Use natural language to describe the feature, fix, or refactor you need. Be as specific or general as you like — Lacker.ai adapts to your communication style.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    number: "03",
    title: "Review & Deploy",
    description: "Get production-ready code with tests, documentation, and security checks. Review the suggestions, make any tweaks, and deploy with confidence.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-[#080818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-wide uppercase">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Three steps to <span className="gradient-text">10x productivity</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Get started in minutes, not hours. No complex setup required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-6 shadow-lg`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
