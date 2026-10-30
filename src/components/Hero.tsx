export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-[#050510] dark:to-[#050510]" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-indigo-700 dark:text-indigo-300">Now in Public Beta &mdash; Try it free</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Supercharge Your Code
            <br />
            <span className="gradient-text">With AI Intelligence</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Lacker.ai is your AI-powered coding companion that understands your codebase,
            generates production-ready code, and helps you ship faster than ever before.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105">
              Start Building for Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              14-day free trial
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-900 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-400 font-mono">lacker.ai - AI Code Assistant</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-400">
                  <span className="text-purple-400">{">"}</span> <span className="text-green-400">Generate a REST API for user authentication</span>
                </div>
                <div className="mt-4 text-gray-300">
                  <div className="text-indigo-400">// Lacker.ai generating...</div>
                  <div className="mt-2">
                    <span className="text-blue-400">import</span> <span className="text-yellow-300">{"{ Router }"}</span> <span className="text-blue-400">from</span> <span className="text-green-300">{'"express"'}</span>;
                  </div>
                  <div>
                    <span className="text-blue-400">import</span> <span className="text-yellow-300">{"{ hash, compare }"}</span> <span className="text-blue-400">from</span> <span className="text-green-300">{'"bcrypt"'}</span>;
                  </div>
                  <div>
                    <span className="text-blue-400">import</span> <span className="text-yellow-300">jwt</span> <span className="text-blue-400">from</span> <span className="text-green-300">{'"jsonwebtoken"'}</span>;
                  </div>
                  <div className="mt-2">
                    <span className="text-blue-400">const</span> <span className="text-yellow-300">router</span> = <span className="text-blue-300">Router</span>();
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500">{"// POST /auth/register"}</span>
                  </div>
                  <div>
                    <span className="text-yellow-300">router</span>.<span className="text-blue-300">post</span>(<span className="text-green-300">{`"/register"`}</span>, <span className="text-blue-400">async</span> (<span className="text-orange-300">req, res</span>) {"=> {"}</div>
                  <div className="text-gray-500 pl-4">{"  // ..."}</div>
                  <div>{"});"}</div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Production-ready
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    Generated in 2.3s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
