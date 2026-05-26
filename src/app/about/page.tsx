import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { contactUrl } from "@/lib/contactUrl";

const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const stats = [
  {
    value: "50+",
    label: "Websites built",
    img: `${CDN}/69d7f452e051a662d330cc68_website-project-by-brix-agency.png`,
  },
  {
    value: "99%",
    label: "Client satisfaction",
    img: `${CDN}/69d80910ee1deba47b7d7de6_brix-agency-client-satisfaction.png`,
  },
  {
    value: "7+",
    label: "Expert developers",
    img: `${CDN}/69d80dbd6a17410dddca4be6_team-of-developers-at-brix-agency.png`,
  },
  {
    value: "9+",
    label: "Creative designers",
    img: `${CDN}/69d80daafb873e7b8e6160ba_team-of-designers-at-brix-agency.png`,
  },
];

const clientLogos = [
  { name: "Paradox", src: `${CDN}/64135957db7f1b01a572a7e1_paradox-brix-agency-client.svg` },
  { name: "Upside", src: `${CDN}/671c02748704cc88a0e91c10_upside-brix-agency-client.svg` },
  { name: "Certifid", src: `${CDN}/64135957abdff7992eabd97f_certifid-brix-agency-client.svg` },
  { name: "Yesware", src: `${CDN}/641359577368eebff4999993_yesware-brix-agency-client.svg` },
  { name: "GQueues", src: `${CDN}/6413595796c301139ced0aef_gqueues-brix-agency-client.svg` },
];

const accomplishments = [
  {
    stat: "50+",
    title: "Projects shipped on time",
    desc: "We've delivered over 50 world-class digital products - from MVPs to enterprise platforms - all on schedule and within budget.",
    img: `${CDN}/69d8ee809746c0322eef9def_webflow-templates-by-brix-agency.png`,
  },
  {
    stat: "30+",
    title: "Clients across 10+ industries",
    desc: "From SaaS startups to Fortune 500s, our clients span fintech, healthcare, e-commerce, AI, and more.",
    img: `${CDN}/69dcb33d4714420b63b90c14_figma-cloneables-by-brix-agency.png`,
  },
  {
    stat: "5+",
    title: "Years of engineering excellence",
    desc: "Since 2019, we've been obsessing over clean code, great design, and products that actually move the needle for our clients.",
    img: `${CDN}/69d9061b379f1bed97ab5ca3_webflow-award.png`,
  },
  {
    stat: "100%",
    title: "On-time delivery rate",
    desc: "We don't miss deadlines. Ever. Our process is built around clear milestones, daily updates, and no surprises.",
    img: `${CDN}/69dcb5d7fbe8f4f2a201fcfd_figma-community-files-by-brix-agency.png`,
  },
];

const values = [
  {
    title: "Prime Quality",
    desc: "Our main goal is to elevate our work quality every day, and to always produce work that makes us feel proud and satisfied.",
    img: `${CDN}/69d940f9e2c014f06f9f7692_prime-quality-brix-agency-value.png`,
  },
  {
    title: "Perpetual Refinement",
    desc: "We believe there are always better ways to do things, and we strive to discover them every day. How we work today is very different from last year.",
    img: `${CDN}/69d9404a65b60de9a61b7dc7_perpetual-refinement-brix-agency-value.png`,
  },
  {
    title: "Never-Ending Exploration",
    desc: "There is not a single day that we don't explore new technologies, tools, and methodologies to find better ways to serve our clients.",
    img: `${CDN}/69d940faca2cba30b457520b_never-ending-exploration-brix-agency-value.png`,
  },
  {
    title: "Meticulous Precision",
    desc: "Doing things fast is important, but doing them precisely is even more important. We believe working smart is better than working fast without direction.",
    img: `${CDN}/69d940fee1b8b962b086de4b_meticulous-precision-brix-agency-value.png`,
  },
  {
    title: "Automation First",
    desc: "Humans should do creative work, not machines' work. We leverage AI and automation to eliminate all non-essential work and focus on what matters.",
    img: `${CDN}/69d940fa5f2cf80eec0269ed_automation-brix-agency-value.png`,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="pt-36 pb-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-5 block">
              About us
            </span>
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
                  We are<br />Craven Solutions.
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10">
                  We are not just an agency - we are a studio of engineers and
                  creatives that build amazing software products for startups,
                  enterprises, and ourselves.
                </p>
                <Link
                  href={contactUrl("About-Hero")}
                  className="inline-flex items-center px-7 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
              <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CDN}/6a01d09dd854ea4fd7752853_about-brix.png`}
                  alt="Craven Solutions team"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Story / Stats ── */}
        <section id="learn-more" className="py-24 px-6 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
                  Our story
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  The story started<br />5 years ago.
                </h2>
              </div>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                Since 2019 we have designed amazing products, collaborated on
                great projects, and helped dozens of companies ship world-class
                software.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-40 overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-3xl font-black text-slate-900">{s.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Client logos marquee ── */}
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold text-center">
              Trusted by teams at
            </p>
          </div>
          <div className="flex gap-16 animate-marquee w-max px-8">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 object-contain opacity-40 hover:opacity-70 transition-opacity flex-shrink-0"
                />
              )
            )}
          </div>
        </section>

        {/* ── Accomplishments ── */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
                Track record
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Our accomplishments.
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl text-base leading-relaxed">
                Numbers don&apos;t lie. Here&apos;s what we&apos;ve built and
                who we&apos;ve helped along the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {accomplishments.map((a) => (
                <div
                  key={a.title}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-52 overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-4xl font-black text-indigo-600 mb-2">
                      {a.stat}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
                What we stand for
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                The values that drive<br />everything we do.
              </h2>
              <p className="text-gray-500 max-w-xl text-base leading-relaxed">
                Great software isn&apos;t just about code - it&apos;s about the
                principles behind every decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group"
                >
                  <div className="w-14 h-14 mb-5 rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.img}
                      alt={v.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
