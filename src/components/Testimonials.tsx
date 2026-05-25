const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const testimonials = [
  {
    quote:
      "Craven Solutions delivered a product that exceeded every expectation. Their attention to detail and engineering quality is unmatched. We launched on time and immediately saw a 2.1x increase in conversions.",
    name: "Maddie Moe",
    title: "CEO, Paradox",
    photo: `${CDN}/69d6902088a291c16cc418ea_maddie-moe-brix-agency-client.jpg`,
    logo: `${CDN}/64135957db7f1b01a572a7e1_paradox-brix-agency-client.svg`,
    screenshot: `${CDN}/69d690209b134d06a6fa7628_paradox-testimonial-for-brix-agency.png`,
    metric: "2.1x",
    metricLabel: "Conversion Rate",
  },
  {
    quote:
      "We'd worked with three agencies before — none came close to the quality and speed we got from Craven. They felt like a true extension of our in-house team from day one.",
    name: "Tyler Adams",
    title: "Head of Product, Upside",
    photo: `${CDN}/641362c0c070768432f47a98_tyler-adams-brix-agency-client.jpg`,
    logo: `${CDN}/671c02748704cc88a0e91c10_upside-brix-agency-client.svg`,
    screenshot: `${CDN}/69d690207949bb24c655ff4c_upside-testimonial-for-brix-agency.png`,
    metric: "120+",
    metricLabel: "Pages Developed",
  },
  {
    quote:
      "The app they built went from zero to 50k users in three months. The architecture they chose scaled perfectly. Couldn't be happier with the outcome — highly recommend.",
    name: "Alexcia Chambers",
    title: "CTO, Certifid",
    photo: `${CDN}/641362c1abdff744c9ac8c1c_alexcia-chambers-brix-agency-client.jpg`,
    logo: `${CDN}/64135957abdff7992eabd97f_certifid-brix-agency-client.svg`,
    screenshot: `${CDN}/69d690208ede2a7ce92a476d_certifid-testimonial-for-brix-agency.png`,
    metric: "2x",
    metricLabel: "User Sign-ups",
  },
  {
    quote:
      "Craven brought both design sensibility and engineering rigor. The final product was clean, fast, and exactly what our customers needed. Our revenue jumped significantly within weeks.",
    name: "Ian Adams",
    title: "Founder, Yesware",
    photo: `${CDN}/69d69020e9e495060a165b86_ian-adams-brix-agency-client.jpg`,
    logo: `${CDN}/641359577368eebff4999993_yesware-brix-agency-client.svg`,
    screenshot: `${CDN}/69d6902021ee4f0bafc3ac41_yesware-testimonial-for-brix-agency.png`,
    metric: "2.1x",
    metricLabel: "Conversion Rate",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Don&apos;t take our word for it.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow flex flex-col gap-5"
            >
              {/* Logo + metric */}
              <div className="flex items-center justify-between">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.logo} alt={t.title} className="h-6 object-contain opacity-70" />
                <div className="text-right">
                  <span className="text-2xl font-black text-slate-900">{t.metric}</span>
                  <span className="text-xs text-gray-400 block">{t.metricLabel}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-gray-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>

              {/* Project screenshot */}
              <div className="rounded-xl overflow-hidden border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.screenshot}
                  alt={`${t.name} project`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
