const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Engineer at TechFlow",
    content: "Lacker.ai has completely transformed how our team writes code. We ship features 3x faster and with fewer bugs. The codebase intelligence feature is a game-changer.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "CTO at StartupLab",
    content: "We evaluated every AI coding tool on the market. Lacker.ai stood out because it actually understands our architecture and generates code that fits our patterns perfectly.",
    avatar: "AR",
    rating: 5,
  },
  {
    name: "Jordan Park",
    role: "Full-Stack Developer",
    content: "I was skeptical about AI coding assistants, but Lacker.ai proved me wrong. It handles complex refactoring tasks that would normally take hours in just minutes.",
    avatar: "JP",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Engineering Lead at DataSync",
    content: "The security scanning feature alone makes Lacker.ai worth it. We caught several potential vulnerabilities before they made it to production.",
    avatar: "MS",
    rating: 5,
  },
  {
    name: "Dev Patel",
    role: "Indie Developer",
    content: "As a solo developer, Lacker.ai feels like having a senior engineer pair-programming with me 24/7. The free tier is incredibly generous.",
    avatar: "DP",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "VP of Engineering at CloudBase",
    content: "We rolled out Lacker.ai to our entire engineering org of 200+ developers. The productivity gains were measurable within the first week.",
    avatar: "EW",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-[#080818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-wide uppercase">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Loved by <span className="gradient-text">developers worldwide</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Join thousands of developers who are shipping faster with Lacker.ai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
