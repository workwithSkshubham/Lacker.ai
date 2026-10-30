const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individual developers getting started",
    features: [
      "500 AI code generations/month",
      "Basic codebase analysis",
      "VS Code extension",
      "Community support",
      "Single repository",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "For professional developers who want more power",
    features: [
      "Unlimited AI generations",
      "Deep codebase intelligence",
      "All IDE extensions",
      "Priority support",
      "Up to 10 repositories",
      "Team sharing",
      "Security scanning",
      "Custom AI training",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams that need enterprise-grade features",
    features: [
      "Everything in Pro",
      "Unlimited repositories",
      "SSO & SAML",
      "On-premise deployment",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "Audit logs",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-500 tracking-wide uppercase">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Plans that <span className="gradient-text">scale with you</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Start free and upgrade as your needs grow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-500/10 dark:to-white/[0.02] border-2 border-indigo-200 dark:border-indigo-500/30 shadow-xl shadow-indigo-500/10 scale-105"
                  : "bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                    <span className="ml-2 text-gray-500 dark:text-gray-400">/month</span>
                  </>
                )}
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-full text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25"
                    : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
