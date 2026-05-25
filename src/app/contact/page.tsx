"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  "Web Design",
  "Web Development",
  "UI/UX Design",
  "Brand Design",
  "AI & Automation",
  "Conversion Optimization",
];

const budgets = [
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k – $200k",
  "$200k+",
];

const deadlines = ["ASAP", "1 month", "2–3 months", "3+ months"];

const projectTypes = ["One-time project", "Ongoing maintenance", "Both"];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [projectType, setProjectType] = useState("");
  const [sent, setSent] = useState(false);

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <>
      <Navbar />

      {/* Toast notification */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 pointer-events-none ${
          sent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-3 bg-slate-900 text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-xl whitespace-nowrap">
          <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/>
          </svg>
          Message sent! We&apos;ll get back to you within 24 hours.
        </div>
      </div>

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-36 pb-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-6 block">👋</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-5">
              Contact us
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Fill the form below and one of our team members will get back to
              you within 24 business hours to schedule a project discovery call.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 space-y-10"
              >
                {/* Basic info */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Current Website
                    </label>
                    <input
                      type="url"
                      placeholder="https://yoursite.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    What service do you need? *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((s) => {
                      const active = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                            active
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Project Type *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setProjectType(t)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                          projectType === t
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Budget Range (USD) *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold border text-center transition-all duration-150 ${
                          budget === b
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Project Deadline *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {deadlines.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDeadline(d)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                          deadline === d
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-gray-600 border-gray-200 hover:border-slate-400"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and anything else we should know..."
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors"
                >
                  Send Message →
                </button>
              </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
