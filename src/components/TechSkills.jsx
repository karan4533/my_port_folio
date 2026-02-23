import React, { useState } from 'react';

const categoryConfig = [
  { gradient: "from-blue-500 to-blue-700",     light: "bg-blue-50",   border: "border-blue-200",   pill: "bg-blue-100 text-blue-800 hover:bg-blue-600 hover:text-white",   dot: "bg-blue-500" },
  { gradient: "from-violet-500 to-violet-700", light: "bg-violet-50", border: "border-violet-200", pill: "bg-violet-100 text-violet-800 hover:bg-violet-600 hover:text-white", dot: "bg-violet-500" },
  { gradient: "from-emerald-500 to-emerald-700",light: "bg-emerald-50",border: "border-emerald-200",pill: "bg-emerald-100 text-emerald-800 hover:bg-emerald-600 hover:text-white", dot: "bg-emerald-500" },
  { gradient: "from-cyan-500 to-cyan-700",     light: "bg-cyan-50",   border: "border-cyan-200",   pill: "bg-cyan-100 text-cyan-800 hover:bg-cyan-600 hover:text-white",   dot: "bg-cyan-500" },
  { gradient: "from-orange-500 to-orange-700", light: "bg-orange-50", border: "border-orange-200", pill: "bg-orange-100 text-orange-800 hover:bg-orange-600 hover:text-white", dot: "bg-orange-500" },
  { gradient: "from-pink-500 to-pink-700",     light: "bg-pink-50",   border: "border-pink-200",   pill: "bg-pink-100 text-pink-800 hover:bg-pink-600 hover:text-white",   dot: "bg-pink-500" },
  { gradient: "from-indigo-500 to-indigo-700", light: "bg-indigo-50", border: "border-indigo-200", pill: "bg-indigo-100 text-indigo-800 hover:bg-indigo-600 hover:text-white", dot: "bg-indigo-500" },
  { gradient: "from-teal-500 to-teal-700",     light: "bg-teal-50",   border: "border-teal-200",   pill: "bg-teal-100 text-teal-800 hover:bg-teal-600 hover:text-white",   dot: "bg-teal-500" },
];

const TechSkills = ({ techSkills }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const totalSkills = techSkills.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="tech-skills" className="radiant-card p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <i className="fas fa-code text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Tech Skills</h3>
            <p className="text-sm text-gray-500 font-medium">{techSkills.length} categories · {totalSkills} technologies</p>
          </div>
        </div>
        {/* Summary Pills */}
        <div className="flex flex-wrap gap-2">
          {techSkills.map((cat, i) => {
            const cfg = categoryConfig[i % categoryConfig.length];
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(activeCategory === i ? null : i)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  activeCategory === i
                    ? `bg-gradient-to-r ${cfg.gradient} text-white border-transparent shadow-md scale-105`
                    : `${cfg.light} ${cfg.border} text-gray-700 hover:scale-105`
                }`}
              >
                <i className={`${cat.icon} text-[10px]`}></i>
                {cat.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techSkills.map((category, index) => {
          const cfg = categoryConfig[index % categoryConfig.length];
          const isActive = activeCategory === index;
          return (
            <div
              key={index}
              onClick={() => setActiveCategory(isActive ? null : index)}
              className={`rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 group ${
                isActive
                  ? `${cfg.border} shadow-xl scale-[1.02]`
                  : `border-gray-200 hover:${cfg.border} hover:shadow-lg hover:scale-[1.01]`
              }`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${cfg.gradient} px-4 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <i className={`${category.icon} text-white text-sm`}></i>
                    </div>
                    <h4 className="font-bold text-white text-sm">{category.category}</h4>
                  </div>
                  <span className="text-xs font-bold text-white/80 bg-white/20 px-2 py-0.5 rounded-full">
                    {category.skills.length}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className={`p-3 ${cfg.light} min-h-[80px]`}>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 cursor-default ${cfg.pill}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} opacity-70`}></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Languages", value: techSkills.find(t => t.category === "Programming")?.skills.length ?? 0, icon: "fas fa-terminal", color: "text-blue-600" },
          { label: "Frameworks", value: (techSkills.find(t => t.category === "Frontend")?.skills.length ?? 0) + (techSkills.find(t => t.category === "Backend")?.skills.length ?? 0), icon: "fas fa-layer-group", color: "text-violet-600" },
          { label: "Databases", value: techSkills.find(t => t.category === "Databases")?.skills.length ?? 0, icon: "fas fa-database", color: "text-emerald-600" },
          { label: "Tools", value: techSkills.find(t => t.category === "Tools & Platforms")?.skills.length ?? 0, icon: "fas fa-tools", color: "text-orange-600" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className={`text-lg ${stat.color}`}>
              <i className={stat.icon}></i>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
