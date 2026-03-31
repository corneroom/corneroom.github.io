"use client";

const testimonials = [
  { quote: "Stayed with a local family in Kyoto — most authentic travel experience of my life.", name: "Sarah K.", role: "Digital Nomad", location: "Canada" },
  { quote: "I earn $2,400/mo hosting my spare room. The platform makes it completely effortless.", name: "Marco T.", role: "Host", location: "Rome" },
  { quote: "Found a Bali co-working space for half the price. Made friends for life.", name: "Aisha N.", role: "Developer", location: "Lagos" },
  { quote: "Listed my sailboat — booked solid all summer. Pays the marina fees and then some!", name: "Erik S.", role: "Boat Host", location: "Stockholm" },
  { quote: "Safe, verified hosts. As a solo female traveler, that peace of mind is everything.", name: "Priya M.", role: "Solo Traveler", location: "Mumbai" },
  { quote: "The shower feature saved me during my 3-month backpacking trip across Southeast Asia.", name: "Lena W.", role: "Traveler", location: "Berlin" },
];

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="community" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Community</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-5xl">
            Loved by travelers worldwide
          </h2>
        </div>
      </div>

      {/* Infinite scroll testimonials */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent" />

        <div
          className="flex gap-5 hover:[animation-play-state:paused]"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}, {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
