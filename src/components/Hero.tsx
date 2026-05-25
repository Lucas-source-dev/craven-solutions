import Link from "next/link";
import { contactUrl } from "@/lib/contactUrl";

const CDN = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d";

const pressLogos = [
  { name: "TechCrunch", src: `${CDN}/6400d78f51450042f3d1e35e_brix-agency-tech-crunch.svg` },
  { name: "TNW", src: `${CDN}/6400d78f9a36c27cb7543e08_brix-agency-tnw.svg` },
  { name: "Product Hunt", src: `${CDN}/6400d78f91ce803df0306fa1_brix-agency-product-hunt.svg` },
  { name: "The New York Times", src: `${CDN}/6400d78f9a36c21a96543e09_brix-agency-the-new-york-times.svg` },
];

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "On-time Delivery" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-8 border border-indigo-200 px-4 py-2 rounded-full bg-indigo-50">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          Software Development Agency
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-slate-900 mb-6 max-w-5xl">
          We build software for
          <br />
          <span className="whitespace-nowrap"><span className="text-indigo-600">world-class</span> companies.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Our team of designers &amp; developers creates exceptional digital
            products for startups, enterprises, and everything in between.
          </p>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href={contactUrl("Homepage")}
              className="px-7 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-14 pt-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-7">
            As featured in
          </p>
          <div className="flex flex-wrap items-center gap-10">
            {pressLogos.map((logo) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-5 object-contain opacity-40 hover:opacity-70 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden mt-14">
          {stats.map((s, i) => (
            <div key={s.label} className={`bg-white px-8 py-7 ${i < 3 ? "md:border-r border-gray-100" : ""}`}>
              <p className="text-3xl font-black text-slate-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
