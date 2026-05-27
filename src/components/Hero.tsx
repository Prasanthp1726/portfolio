"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-bg dot-pattern min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-indigo-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </div>

          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Prasanth</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            I craft beautiful, high-performance web applications with modern technologies.
            Turning ideas into reality — one line of code at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => handleScroll("projects")}
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-gray-800 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="px-8 py-3.5 rounded-full glass border border-indigo-500/40 text-indigo-600 hover:text-gray-800 font-semibold transition-all duration-300 hover:border-indigo-400 hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10 justify-center lg:justify-start">
            <span className="text-gray-400 text-sm">Find me on</span>
            {[
              {
                label: "GitHub",
                href: "https://github.com/Prasanthp1726",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/prasanth-p",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Twitter",
                href: "https://twitter.com",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-500/50 transition-all duration-200 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-4 rounded-full border border-indigo-500/30" />
            {/* Avatar circle */}
            <div className="absolute inset-6 rounded-full overflow-hidden animate-float glow">
              <Image src="/prasanth.png" alt="Prasanth" fill className="object-cover object-top" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-indigo-600 border border-indigo-500/30 animate-bounce" style={{ animationDuration: "2s" }}>
              React ⚛️
            </div>
            <div className="absolute -bottom-2 -left-2 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-purple-300 border border-purple-500/30 animate-bounce" style={{ animationDuration: "2.5s" }}>
              Next.js 🚀
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs">Scroll down</span>
        <div className="w-5 h-9 rounded-full border border-gray-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
