import Link from "next/link";
import { contactUrl } from "@/lib/contactUrl";

const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const row1 = [
  { title: "LaunchHub", img: `${CDN}/69d6fc96666616fd44d9c317_launchhub-project-brix-agency-portfolio.png` },
  { title: "Quantum", img: `${CDN}/69d7010713aa073294dc2f19_quantum-project-brix-agency-portfolio.png` },
  { title: "Pageindex", img: `${CDN}/69d70825aa76dae208d693e0_pageindex-project-brix-agency-portfolio.png` },
  { title: "Carpay", img: `${CDN}/69d708c3981874652299a115_carpay-project-brix-agency-portfolio.png` },
  { title: "Upside", img: `${CDN}/69d7092d1946146b403e6a9f_upside-project-brix-agency-portfolio.png` },
  { title: "DigiGrowth", img: `${CDN}/69d709791c6dd44ca64c4d56_digigrowth-project-brix-agency-portfolio.png` },
  { title: "BuilderFlow", img: `${CDN}/69d709d5abb55561a6ddd846_builderflow-project-brix-agency-portfolio.png` },
  { title: "Iambic", img: `${CDN}/69d70a4952ad25411d0ef06c_iambic-project-brix-agency-portfolio.png` },
  { title: "VoiceCloud", img: `${CDN}/69d70b6d73e8b9d87ea7d852_voicecloud-project-brix-agency-portfolio.png` },
  { title: "Subsplash", img: `${CDN}/69d70afe4d984b0ccbaae19e_subsplash-project-brix-agency-portfolio.png` },
];

const row2 = [
  { title: "Yesware", img: `${CDN}/69d70f2bf41ea1f5b84fe9e8_yesware-project-brix-agency-portfolio.png` },
  { title: "CinemaFlow", img: `${CDN}/69d70fc8200691c2192a2891_cinemaflow-project-brix-agency-portfolio.png` },
  { title: "Certifid", img: `${CDN}/69d70ffc748c23a1bed13b7c_certifid-project-brix-agency-portfolio.png` },
  { title: "CloudWhisper", img: `${CDN}/69d710612ffb463cb0aa64be_cloudwhisper-project-brix-agency-portfolio.png` },
  { title: "Teachable", img: `${CDN}/69d710a2eec26468efd6df55_teachable-project-brix-agency-portfolio.png` },
  { title: "DefiChain", img: `${CDN}/69d710df2c3f5459385f9944_defichain-project-brix-agency-portfolio.png` },
  { title: "Celigo", img: `${CDN}/69d711139bc79241df3ed2be_celigo-project-brix-agency-portfolio.png` },
  { title: "Paradox", img: `${CDN}/69d711681d7f544318912bfd_paradox-project-brix-agency-portfolio.png` },
  { title: "AgentFlow", img: `${CDN}/69d711ad480c56aa52066fef_agentflow-project-brix-agency-portfolio.png` },
  { title: "DataCenter", img: `${CDN}/69d7120f9c508aa57a7e0145_datacenter-project-brix-agency-portfolio.png` },
];

function MarqueeRow({ items, reverse }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {doubled.map((item, i) => (
        <div
          key={i}
          className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
            <span className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
              {item.title} →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
          Our Work
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Let our work
            <br />
            speak for itself.
          </h2>
          <Link
            href={contactUrl("Portfolio")}
            className="w-fit text-sm font-semibold text-slate-900 border border-gray-200 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all"
          >
            Start a project →
          </Link>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden">
          <MarqueeRow items={row1} />
        </div>
        <div className="overflow-hidden">
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
