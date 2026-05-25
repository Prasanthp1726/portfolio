"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "prasanth1726p@gmail.com",
      }, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "prasanth1726p@gmail.com",
      href: "mailto:prasanth1726p@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 98652 31638",
      href: "tel:+919865231638",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s talk! I&apos;m always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-6">Let&apos;s Connect</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 group-hover:scale-110 transition-all duration-200 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{info.label}</p>
                      <p className="text-gray-200 text-sm font-medium group-hover:text-indigo-300 transition-colors duration-200">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/Prasanthp1726", color: "hover:bg-gray-700" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/prasanth-p", color: "hover:bg-blue-700" },
                  { label: "Twitter", href: "https://twitter.com", color: "hover:bg-sky-600" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 rounded-xl glass text-center text-gray-400 hover:text-white text-sm font-medium transition-all duration-200 ${s.color}`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Currently Available</p>
                  <p className="text-gray-400 text-xs mt-0.5">Open to full-time & freelance work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-sm font-medium block mb-2" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-medium block mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm font-medium block mb-2" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm font-medium block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "success"
                      ? "bg-green-600 text-white"
                      : status === "sending"
                      ? "bg-indigo-700 text-indigo-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02]"
                  }`}
                >
                  {status === "sending" && (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {status === "success" && "✅ Message Sent!"}
                  {status === "sending" && "Sending..."}
                  {status === "idle" && "Send Message →"}
                  {status === "error" && "Try Again"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
