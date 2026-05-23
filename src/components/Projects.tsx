"use client";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce app with cart, payment integration, and admin dashboard built with Next.js and MongoDB.",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    category: "Full Stack",
    gradient: "from-blue-500 to-cyan-500",
    emoji: "🛍️",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    category: "Full Stack",
    gradient: "from-indigo-500 to-purple-500",
    emoji: "📋",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark theme, animations, and smooth scroll — exactly like this one!",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    gradient: "from-purple-500 to-pink-500",
    emoji: "🎨",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather app with real-time forecasts, location-based data, and interactive charts using OpenWeather API.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-500",
    emoji: "🌤️",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Blog REST API",
    description: "A robust RESTful API for a blogging platform with JWT auth, CRUD operations, and image upload support.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
    gradient: "from-green-500 to-emerald-500",
    emoji: "🔗",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with private rooms, online status indicators, and emoji support using WebSockets.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    category: "Full Stack",
    gradient: "from-orange-500 to-red-500",
    emoji: "💬",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium text-sm uppercase tracking-widest mb-3">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "glass text-gray-400 hover:text-white hover:border-indigo-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10 group flex flex-col"
            >
              {/* Card Header */}
              <div className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-full bg-black/30 text-white text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl glass text-gray-300 hover:text-white hover:border-indigo-500/40 text-sm font-medium transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white text-sm font-medium transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border border-indigo-500/40 text-indigo-300 hover:text-white font-semibold transition-all duration-300 hover:border-indigo-400 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
