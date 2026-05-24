export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-xl font-bold gradient-text">&lt;Prasanth /&gt;</span>
            <p className="text-gray-500 text-sm mt-1">Full Stack Developer · India</p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { label: "GitHub", href: "https://github.com/Prasanthp1726" },
              { label: "LinkedIn", href: "https://linkedin.com/in/prasanth-p" },
              { label: "Twitter", href: "https://twitter.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg glass text-gray-500 hover:text-indigo-400 text-xs font-medium transition-all duration-200 hover:border-indigo-500/40"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © {year} Prasanth. Built with{" "}
            <span className="text-indigo-400">Next.js</span> &amp;{" "}
            <span className="text-cyan-400">Tailwind CSS</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
