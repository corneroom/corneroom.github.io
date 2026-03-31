import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Nav */}
      <header className="border-b border-white/8 px-6 py-4 lg:px-10">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
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

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <h1 className="text-3xl font-bold text-white lg:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-white/40">Last updated: {lastUpdated}</p>

        <div className="legal-content mt-10 space-y-8 text-sm leading-relaxed text-white/60 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white/80 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline [&_strong]:text-white/80">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Corneroom. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60">Terms</Link>
            <Link href="/support" className="hover:text-white/60">Support</Link>
            <Link href="/contact" className="hover:text-white/60">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
