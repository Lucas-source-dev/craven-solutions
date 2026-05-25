import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { contactUrl } from "@/lib/contactUrl";

const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const services = [
  {
    slug: "web-design",
    title: "Web Design",
    headline: "We design websites that convert.",
    description:
      "Your website is your most powerful sales tool. We craft premium, conversion-focused websites that look stunning, load fast, and guide visitors toward action — whether that's signing up, buying, or booking a call.",
    features: [
      "Responsive design for all devices",
      "Conversion-optimized landing pages",
      "CMS integration (Sanity, Contentful)",
      "Performance & Core Web Vitals optimization",
      "Accessibility-first approach",
    ],
    image: `${CDN}/69ef33da2f342051646de4ff_web-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fad_web-design-service.webp`,
  },
  {
    slug: "web-development",
    title: "Web Development",
    headline: "We build applications that scale.",
    description:
      "From MVPs to enterprise platforms, we engineer full-stack web applications using modern frameworks. Our code is clean, tested, and built to grow with your business — no tech debt, no shortcuts.",
    features: [
      "React & Next.js front-end development",
      "Node.js, Python, and Go backends",
      "REST & GraphQL API design",
      "PostgreSQL, MongoDB, and Redis",
      "CI/CD pipelines and cloud deployment",
    ],
    image: `${CDN}/69d67858a4edd37780a1077d_web-development-agency.png`,
    icon: `${CDN}/6a01b789185498135a8d6fc5_web-development-service.webp`,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    headline: "We design experiences users love.",
    description:
      "Great software starts with great design. We combine deep user research with pixel-perfect execution to create interfaces that are intuitive, beautiful, and built for real human beings.",
    features: [
      "User research & persona development",
      "Wireframing and information architecture",
      "High-fidelity Figma prototypes",
      "Usability testing and iteration",
      "Design systems and component libraries",
    ],
    image: `${CDN}/69d677a5a1ecb6eb145966e5_ui-ux-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fb3_ui-ux-design-service.webp`,
  },
  {
    slug: "brand-design",
    title: "Brand Design",
    headline: "We build brands that stand out.",
    description:
      "In a crowded market, your brand is your edge. We create memorable brand identities — from logos and color palettes to full visual systems — that communicate your values and make you impossible to ignore.",
    features: [
      "Logo design and visual identity",
      "Brand guidelines and style guides",
      "Typography and color system",
      "Marketing materials and collateral",
      "Brand strategy and positioning",
    ],
    image: `${CDN}/69d677a5e838e4711870f6fe_brand-design-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fc2_brand-design-service.webp`,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    headline: "We automate what slows you down.",
    description:
      "AI is no longer optional — it's a competitive advantage. We integrate large language models, build intelligent workflows, and create AI-powered features that save your team hours every week.",
    features: [
      "LLM integration (OpenAI, Anthropic, Gemini)",
      "RAG pipelines and vector search",
      "Workflow and process automation",
      "Custom AI agents and copilots",
      "Data extraction and enrichment",
    ],
    image: `${CDN}/69e1185132a5ee6630ed0f8a_artificial-intelligence-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fb9_ai-services-service.webp`,
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    headline: "We turn your visitors into customers.",
    description:
      "Traffic without conversions is wasted spend. We use data, psychology, and rigorous testing to identify exactly where users drop off and systematically fix it — lifting revenue without increasing ad budgets.",
    features: [
      "A/B and multivariate testing",
      "Heatmap and session recording analysis",
      "Landing page redesigns",
      "Funnel analysis and optimization",
      "Copywriting and messaging strategy",
    ],
    image: `${CDN}/69d677a629e3b9704e557538_conversion-optimization-agency.png`,
    icon: `${CDN}/6a01b788185498135a8d6fbf_conversion-optimization-service.webp`,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-5 block">
              What we do
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight max-w-2xl">
                Our Services
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Our comprehensive design and development services are crafted to help
                your company reach its full potential and grow.
              </p>
            </div>

            {/* Quick-jump nav */}
            <div className="flex flex-wrap gap-3 mt-12">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="text-sm font-medium px-4 py-2 border border-gray-200 rounded-full text-gray-600 hover:border-slate-900 hover:text-slate-900 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Service sections */}
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`py-24 px-6 scroll-mt-20 ${isEven ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-center`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt="" className="w-9 h-9 object-contain" />
                      <span className="text-sm font-semibold text-indigo-600 tracking-widest uppercase">
                        {s.title}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
                      {s.headline}
                    </h2>

                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {s.description}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-sm text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={contactUrl("Services")}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors"
                    >
                      Get in touch
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
