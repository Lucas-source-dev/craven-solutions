import Link from "next/link";
import { contactUrl } from "@/lib/contactUrl";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-3xl px-10 py-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10">
            <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-5 block">
              Ready to build?
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              Let&apos;s build something
              <br />
              great together.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Have a project in mind? Drop us a message and we&apos;ll get back
              to you within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={contactUrl("CTA")}
                className="px-8 py-4 bg-white text-slate-900 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/#work"
                className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors"
              >
                See our work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
