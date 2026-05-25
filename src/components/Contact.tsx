"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Start a project.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>

          <div className="space-y-4">
            {[
              { icon: "✉", label: "hello@cravensolutions.com" },
              { icon: "☎", label: "+1 (555) 000-0000" },
              { icon: "📍", label: "Remote-first · Worldwide" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          {sent ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">✅</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Message sent!
              </h3>
              <p className="text-gray-500 text-sm">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors bg-white text-gray-700">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>API / Backend</option>
                  <option>UI/UX Design</option>
                  <option>AI Integration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
