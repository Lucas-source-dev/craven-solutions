import Link from "next/link";
import { contactUrl } from "@/lib/contactUrl";

const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const services = [
  {
    slug: "web-design",
    title: "Web Design",
    desc: "Stunning, conversion-focused websites that leave a lasting impression and drive real business results.",
    image: `${CDN}/69ef33da2f342051646de4ff_web-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fad_web-design-service.webp`,
  },
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Full-stack web applications built with React, Next.js, and Node.js - performant, scalable, and production-ready.",
    image: `${CDN}/69d67858a4edd37780a1077d_web-development-agency.png`,
    icon: `${CDN}/6a01b789185498135a8d6fc5_web-development-service.webp`,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "User research, wireframes, and polished interfaces that convert. Design and engineering under one roof.",
    image: `${CDN}/69d677a5a1ecb6eb145966e5_ui-ux-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fb3_ui-ux-design-service.webp`,
  },
  {
    slug: "brand-design",
    title: "Brand Design",
    desc: "Memorable brand identities that communicate your values and set you apart in a crowded market.",
    image: `${CDN}/69d677a5e838e4711870f6fe_brand-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fc2_brand-design-service.webp`,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    desc: "LLM integrations, workflow automation, and AI-powered features that give your product a real competitive edge.",
    image: `${CDN}/69e1185132a5ee6630ed0f8a_artificial-intelligence-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fb9_ai-services-service.webp`,
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    desc: "Data-driven improvements to your funnels, landing pages, and UX that measurably increase revenue.",
    image: `${CDN}/69d677a629e3b9704e557538_conversion-optimization-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fbf_conversion-optimization-service.webp`,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
              What we do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="w-fit text-sm font-semibold text-slate-900 border border-gray-200 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all"
          >
            View all services →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
            >
              {/* Preview image */}
              <div className="relative h-52 overflow-hidden bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" className="w-7 h-7 object-contain" />
                  <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold text-indigo-600 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
