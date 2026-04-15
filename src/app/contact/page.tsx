import Link from "next/link";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const metadata = { title: "Contact — Corneroom" };

const channels = [
  {
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    title: "General Inquiries",
    desc: "Questions about Corneroom, partnerships, or anything else",
    user: "info",
  },
  {
    icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
    title: "Support",
    desc: "Help with bookings, listings, payments, or your account",
    user: "support",
  },
  {
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    title: "Privacy & Data",
    desc: "Data requests, account deletion, GDPR inquiries",
    user: "privacy",
  },
  {
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
    title: "Press & Media",
    desc: "Press kit, interviews, brand assets, media inquiries",
    user: "press",
  },
  {
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    title: "Careers",
    desc: "Join our remote-first team building for a global community",
    user: "careers",
  },
  {
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    title: "Safety (24/7)",
    desc: "Urgent safety concerns — prioritized around the clock",
    user: "safety",
  },
];

const responseTimes = [
  { channel: "General", time: "2–3 business days" },
  { channel: "Support", time: "Within 24 hours" },
  { channel: "Privacy/Data", time: "Within 30 days" },
  { channel: "Safety", time: "24/7 — immediate priority" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Nav */}
      <header className="border-b border-white/8 px-6 py-4 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF642B]">
              <svg viewBox="0 0 100 100" className="h-4 w-4" fill="white">
                <path d="M50 95c-.7 0-1.5-.2-2.2-.6C46.5 93.5 16 73.7 16 39.1 16 20.3 31.3 5 50 5s34 15.3 34 34.1c0 34.6-30.5 54.5-31.8 55.3-.7.4-1.5.6-2.2.6zm0-68c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
              </svg>
            </div>
            <span className="text-base font-bold text-white">corneroom</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-10 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF642B]">Get in touch</p>
          <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Whether you have a question, need support, or want to partner — pick a channel below.
          </p>
        </div>
      </section>

      {/* Map + Office */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/8">
          <div className="grid lg:grid-cols-5">
            {/* Map embed */}
            <div className="relative lg:col-span-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2!2d-79.3925!3d43.6515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2s180%20John%20St%2C%20Toronto%2C%20ON%20M5T%201X5!5e0!3m2!1sen!2sca!4v1"
                className="h-64 w-full border-0 brightness-[0.3] contrast-[1.2] grayscale invert lg:h-full lg:min-h-[300px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office card */}
            <div className="flex flex-col justify-center bg-white/[0.03] p-8 lg:col-span-2 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Headquarters</p>
              <h3 className="mt-3 text-lg font-bold text-white">
                Inspired Technologies &<br />Business Solutions Inc.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                180 John St<br />
                Toronto, ON M5T 1X5<br />
                Canada
              </p>
              <a
                href="https://maps.google.com/?q=180+John+St,+Toronto,+ON+M5T+1X5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact channels grid */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((ch) => (
              <div
                key={ch.title}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF642B]/10 text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={ch.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{ch.title}</h3>
                <p className="mt-1 text-xs text-white/40">{ch.desc}</p>
                <p className="mt-3 text-xs font-semibold text-[#FF642B]">
                  <ObfuscatedEmail user={ch.user} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response times */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8">
            <h3 className="text-sm font-bold text-white">Expected Response Times</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {responseTimes.map((rt) => (
                <div key={rt.channel}>
                  <p className="text-xs text-white/30">{rt.channel}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{rt.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-white/30">Follow us</p>
          <div className="mt-4 flex justify-center gap-3">
            {[
              { label: "Twitter", href: "https://twitter.com/corneroomApp", icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
              { label: "Instagram", href: "https://instagram.com/corneroomApp", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "TikTok", href: "https://tiktok.com/@corneroomApp", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] text-white/40 transition-all hover:border-white/15 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Corneroom. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60">Terms</Link>
            <Link href="/support" className="hover:text-white/60">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
