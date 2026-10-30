const stats = [
  { value: "50K+", label: "Developers" },
  { value: "10M+", label: "Lines Generated" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Developer Rating" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-[#050510] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
