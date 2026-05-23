"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 72 },
      { name: "AWS (basics)", level: 60 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "Docker", "AWS", "Figma"
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-indigo-400 text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium text-sm uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="text-center">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass text-gray-300 text-sm font-medium border border-white/5 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200 hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
