"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ── FAQ data ── */
const faqs = [
  {
    q: "How do I book a space?",
    a: "Browse spaces by city or category, select your dates, and tap \"Book.\" Instant Book spaces are confirmed immediately. Others require host approval, usually within a few hours.",
  },
  {
    q: "How do I list my space?",
    a: "Download the app, create an account, and tap \"Become a Host.\" Add photos, set your price and availability, and publish. Your listing will be live within minutes.",
  },
  {
    q: "How do payments work?",
    a: "All payments are processed securely through Stripe. Guests pay at the time of booking. Hosts receive payouts after guest check-in, minus the Corneroom service fee.",
  },
  {
    q: "How do I cancel a booking?",
    a: "Go to your bookings in the app and select the booking you want to cancel. Refund amounts depend on the host\u2019s cancellation policy (Flexible, Moderate, or Strict), which is displayed before you book.",
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        You can delete your account from the app (Settings &rarr; Account &rarr;
        Delete Account) or by visiting our{" "}
        <Link href="/delete-account" className="text-[#FF642B] underline underline-offset-2">
          Account Deletion page
        </Link>
        .
      </>
    ),
  },
  {
    q: "Is Corneroom safe?",
    a: "We verify host identities and locations, process payments securely through Stripe (PCI DSS Level 1), and have a review system so you can see feedback from other users. We also have 24/7 support for urgent safety concerns.",
  },
  {
    q: "What types of spaces can I list?",
    a: "Almost anything \u2014 spare rooms, couches, entire apartments, co-working desks, home offices, showers, boats, bar tables, and more. The space must be legal to share in your jurisdiction.",
  },
  {
    q: "How are hosts verified?",
    a: "Hosts complete identity verification (government ID + selfie) and location verification (GPS check). Verified hosts display a badge on their profile.",
  },
  {
    q: "What fees does Corneroom charge?",
    a: "Corneroom charges a small service fee on each booking, split between the host and guest. The exact fee is displayed before you confirm a booking.",
  },
  {
    q: "I\u2019m having trouble with the app",
    a: "Try restarting the app or updating to the latest version. If the issue persists, contact us via the options below or email support@corneroom.com.",
  },
];

/* ── Quick-link categories ── */
const quickLinks = [
  {
    title: "Booking Help",
    description: "Find, book, or manage reservations",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Host Help",
    description: "Listing, pricing & hosting tips",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Payments",
    description: "Billing, payouts & refunds",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
  {
    title: "Account",
    description: "Profile, settings & deletion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Safety",
    description: "Trust, verification & emergencies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

/* ── Page ── */
export default function SupportPage() {

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ── Nav ── */}
      <header className="border-b border-white/[0.06] px-6 py-4 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF642B]">
              <svg viewBox="0 0 100 100" className="h-4 w-4" fill="white">
                <path d="M50 95c-.7 0-1.5-.2-2.2-.6C46.5 93.5 16 73.7 16 39.1 16 20.3 31.3 5 50 5s34 15.3 34 34.1c0 34.6-30.5 54.5-31.8 55.3-.7.4-1.5.6-2.2.6zm0-68c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
              </svg>
            </div>
            <span className="text-base font-bold text-white">corneroom</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-28">
        {/* Subtle gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FF642B]/[0.04] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight lg:text-5xl"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-lg text-base text-white/50"
          >
            Find answers, get support, and learn how to make the most of
            Corneroom.
          </motion.p>

          {/* Decorative search input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white/30">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <span className="text-sm text-white/25">
                Search for help articles...
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickLinks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="group cursor-default rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#FF642B]/20 hover:bg-[#FF642B]/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/10">
                  {item.icon}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-white/40">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Quick answers to the most common questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-white/[0.06]">
                  <AccordionTrigger className="py-5 text-[15px] font-medium text-white hover:text-[#FF642B] [&>svg]:text-white/50">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-white/50">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── Still Need Help? ── */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Still need help?
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Our support team is here for you. Choose the way that works best.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {/* Email support */}
            <motion.a
              href="mailto:support@corneroom.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#FF642B]/20 hover:bg-[#FF642B]/[0.04]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                Email Support
              </p>
              <p className="mt-1 text-xs text-[#FF642B]">
                support@corneroom.com
              </p>
              <p className="mt-2 text-xs text-white/30">
                Usually responds within 24 hours
              </p>
            </motion.a>

            {/* In-app support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#FF642B]/20 hover:bg-[#FF642B]/[0.04]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                In-App Support
              </p>
              <p className="mt-1 text-xs text-white/50">
                Settings &rarr; Help & Support
              </p>
              <p className="mt-2 text-xs text-white/30">
                Chat with our team directly
              </p>
            </motion.div>

            {/* Safety line */}
            <motion.a
              href="mailto:safety@corneroom.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#FF642B]/20 hover:bg-[#FF642B]/[0.04]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-[#FF642B] transition-colors group-hover:bg-[#FF642B]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                Safety Line
              </p>
              <p className="mt-1 text-xs text-[#FF642B]">
                safety@corneroom.com
              </p>
              <p className="mt-2 text-xs text-white/30">
                24/7 for urgent safety concerns
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Corneroom. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">Terms</Link>
            <Link href="/safety" className="transition-colors hover:text-white/60">Safety</Link>
            <Link href="/contact" className="transition-colors hover:text-white/60">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
