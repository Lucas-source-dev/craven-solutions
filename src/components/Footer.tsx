import Link from "next/link";
import Logo from "@/components/Logo";
import { contactUrl } from "@/lib/contactUrl";

const services = [
  { label: "Web Design", slug: "web-design" },
  { label: "Web Development", slug: "web-development" },
  { label: "UI/UX Design", slug: "ui-ux-design" },
  { label: "Brand Design", slug: "brand-design" },
  { label: "AI & Automation", slug: "ai-automation" },
  { label: "Conversion Optimization", slug: "conversion-optimization" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: contactUrl("Footer") },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed max-w-xs">
              A software development agency building world-class digital products
              for startups and enterprises worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-gray-500 hover:text-slate-900 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-500 hover:text-slate-900 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-gray-500">hello@cravensolutions.net</li>
              <li className="text-sm text-gray-500">+1 (854) 247-8284</li>
              <li className="text-sm text-gray-500">Remote-first · Worldwide</li>
            </ul>
            <Link
              href={contactUrl("Footer")}
              className="inline-block text-sm font-semibold px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Craven Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
