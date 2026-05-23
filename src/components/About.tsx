"use client";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Technologies", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium text-sm uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image / Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 sm:w-80">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-6 glow">
                  <span className="text-4xl font-bold text-white">P</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Prasanth</h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  India
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 text-center border border-indigo-500/30 animate-float">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-xs text-gray-400">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Passionate Developer &amp;{" "}
              <span className="gradient-text">Problem Solver</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I&apos;m Prasanth, a Full Stack Developer with a passion for creating elegant,
                efficient, and user-friendly web applications. I love turning complex problems into
                simple, beautiful, and intuitive solutions.
              </p>
              <p>
                With expertise in both frontend and backend development, I work with modern
                technologies like React, Next.js, Node.js, and more. I&apos;m always eager to learn
                new technologies and stay up-to-date with industry best practices.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
                to open-source projects, or enjoying a good cup of coffee ☕.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Name", value: "Prasanth" },
                { label: "Location", value: "India" },
                { label: "Email", value: "prasanth@email.com" },
                { label: "Availability", value: "Open to Work" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4">
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
