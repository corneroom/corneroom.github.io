"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./home.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Real store URLs — reused from AppBadges.tsx / DownloadCTA on the live site.
const APP_STORE_URL = "https://apps.apple.com/app/corneroom/id6740086312";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=ca.inspiredtech.corneroom";

// Real social URLs — reused from Footer.tsx.
const SOCIAL = {
  instagram: "https://instagram.com/corneroomApp",
  x: "https://twitter.com/corneroomApp",
  tiktok: "https://tiktok.com/@corneroomApp",
};

const cssVar = (name: string) => `var(--${name})` as const;

/* ----------------------------- Shared icons ----------------------------- */
const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3 6.5 7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-7.3L2 9.1l7-.6L12 2Z" />
  </svg>
);
const Heart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
  </svg>
);
const Mark = ({ className = "mark" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 3C12.8 3 7 8.8 7 16c0 8.2 10.4 18.2 12.2 19.9a1.2 1.2 0 0 0 1.6 0C22.6 34.2 33 24.2 33 16 33 8.8 27.2 3 20 3Z" fill="#FF642B" />
    <path d="M20 10.5l7 5.4V25a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 13 25v-9.1l7-5.4Z" fill="#fff" />
    <path d="M17.6 26.5v-4.2a2.4 2.4 0 0 1 4.8 0v4.2h-4.8Z" fill="#FF642B" />
  </svg>
);

/* ----------------------------- Category data ----------------------------- */
type Category = {
  val: string;
  cat: string | null;
  small: string;
  dot?: string;
  plus?: boolean;
  shower?: boolean;
};
const CATEGORIES: Category[] = [
  { val: "Any space", cat: null, small: "Everything", dot: cssVar("primary") },
  { val: "Sleep", cat: "sleep", small: "Beds & rooms", dot: cssVar("sleep") },
  { val: "Work", cat: "work", small: "Desks & studios", dot: cssVar("work") },
  { val: "Shower", cat: "shower", small: "Fresh & clean", dot: cssVar("shower"), shower: true },
  { val: "Boat", cat: "boat", small: "On the water", dot: cssVar("boat") },
  { val: "Social", cat: "social", small: "Meet & hang out", dot: cssVar("social") },
  { val: "& more", cat: null, small: "New categories", plus: true },
];

const FILTERS = [
  { cat: "all", label: "All spaces", dot: cssVar("primary") },
  { cat: "sleep", label: "Sleep", dot: cssVar("sleep") },
  { cat: "work", label: "Work", dot: cssVar("work") },
  { cat: "shower", label: "Shower", dot: cssVar("shower"), shower: true },
  { cat: "boat", label: "Boat", dot: cssVar("boat") },
  { cat: "social", label: "Social", dot: cssVar("social") },
];

const HERO_SCREENS = [
  { src: "/home/screens/worldwide.png", alt: "Corneroom app showing spaces available worldwide" },
  { src: "/home/screens/discover.png", alt: "Corneroom app discover screen with affordable spaces to book" },
  { src: "/home/screens/sleep.png", alt: "Corneroom app showing an affordable place to sleep" },
];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HomeInteractive() {
  const rootRef = useRef<HTMLDivElement>(null);

  /* --------------------------- Nav shadow on scroll --------------------------- */
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --------------------------- Reveal on scroll --------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const revs = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      revs.forEach((r) => r.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revs.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  /* --------------------------- How-it-works tabs --------------------------- */
  const [hostTab, setHostTab] = useState(false);

  /* --------------------------- Featured filter + category selection --------------------------- */
  const [activeCat, setActiveCat] = useState("all");
  const [selectedIdx, setSelectedIdx] = useState(0);

  /* --------------------------- Category picker popover --------------------------- */
  const [pickerOpen, setPickerOpen] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const pickerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const openPicker = useCallback(() => {
    setPickerOpen(true);
    setHighlightIdx(selectedIdx);
  }, [selectedIdx]);

  const closePicker = useCallback((refocus: boolean) => {
    setPickerOpen(false);
    if (refocus) pickerRef.current?.focus();
  }, []);

  const choose = useCallback(
    (i: number) => {
      const opt = CATEGORIES[i];
      setSelectedIdx(i);
      setActiveCat(opt.cat ?? "all");
      closePicker(true);
    },
    [closePicker]
  );

  // Focus the highlighted option while the popover is open.
  useEffect(() => {
    if (pickerOpen) optionRefs.current[highlightIdx]?.focus();
  }, [pickerOpen, highlightIdx]);

  // Outside click + Escape/arrow handling while open.
  useEffect(() => {
    if (!pickerOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      const last = CATEGORIES.length - 1;
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          closePicker(true);
          break;
        case "ArrowDown":
          e.preventDefault();
          setHighlightIdx((i) => (i + 1) % CATEGORIES.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightIdx((i) => (i - 1 + CATEGORIES.length) % CATEGORIES.length);
          break;
        case "Home":
          e.preventDefault();
          setHighlightIdx(0);
          break;
        case "End":
          e.preventDefault();
          setHighlightIdx(last);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          choose(highlightIdx);
          break;
      }
    };
    document.addEventListener("click", onDocClick, true);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("click", onDocClick, true);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [pickerOpen, highlightIdx, choose, closePicker]);

  const onPickerKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (pickerOpen) return;
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      openPicker();
    }
  };

  const selected = CATEGORIES[selectedIdx];

  /* --------------------------- Earnings count-up + bar --------------------------- */
  const earnCardRef = useRef<HTMLDivElement>(null);
  const [earnValue, setEarnValue] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    const el = earnCardRef.current;
    if (!el) return;
    const target = 2400;
    const run = () => {
      setBarWidth(78);
      if (prefersReducedMotion()) {
        setEarnValue(target);
        return;
      }
      let start: number | null = null;
      const dur = 1200;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setEarnValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* --------------------------- Animated hero phone --------------------------- */
  const [heroIdx, setHeroIdx] = useState(0);
  const heroStackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = heroStackRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | null = null;
    let visible = true;
    const tick = () => setHeroIdx((i) => (i + 1) % HERO_SCREENS.length);
    const start = () => {
      if (!timer && visible && !document.hidden) timer = setInterval(tick, 3400);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            visible = e.isIntersecting;
            visible ? start() : stop();
          });
        },
        { threshold: 0.25 }
      );
      io.observe(el);
    } else {
      start();
    }
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  /* --------------------------- Sticky mobile "Get the app" bar --------------------------- */
  const [mounted, setMounted] = useState(false);
  const [barShown, setBarShown] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
  const inAppRef = useRef(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width:860px)");
    const update = () => {
      if (barDismissed || !mq.matches || inAppRef.current) {
        setBarShown(false);
        return;
      }
      setBarShown(window.scrollY > 480);
    };
    window.addEventListener("scroll", update, { passive: true });
    mq.addEventListener("change", update);
    const appSec = document.getElementById("app");
    let io: IntersectionObserver | null = null;
    if (appSec && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            inAppRef.current = e.isIntersecting;
            update();
          });
        },
        { threshold: 0.15 }
      );
      io.observe(appSec);
    }
    update();
    return () => {
      window.removeEventListener("scroll", update);
      mq.removeEventListener("change", update);
      io?.disconnect();
    };
  }, [barDismissed]);

  const fontVars = useMemo(() => `${jakarta.variable} ${inter.variable}`, []);

  return (
    <div ref={rootRef} className={`home ${fontVars}`}>
      {/* ============================== NAV ============================== */}
      <header className={`nav${navScrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap nav-in">
          <a className="brand" href="#top" aria-label="Corneroom home">
            <Mark />
            Corneroom
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#explore">Explore</a>
            <a href="#how">How it works</a>
            <a href="#host">Become a host</a>
            <a href="#world">Worldwide</a>
          </nav>
          <div className="nav-cta">
            <a href="#host" className="btn btn-ghost">Host your space</a>
            <a href="#app" className="btn btn-primary">Get the app</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ============================== HERO ============================== */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">Affordable · Verified · Worldwide</p>
              <h1 className="reveal d1">
                Find &amp; share <span className="hl">spaces</span> around the world
              </h1>
              <p className="hero-sub reveal d2">
                Book real, affordable spaces to sleep, work, shower, boat, socialize &amp; more — hosted by a
                verified community across the globe. Or share your space and earn.
              </p>

              <form className="searchbar reveal d3" onSubmit={(e) => e.preventDefault()} aria-label="Search spaces">
                <div className="sf" tabIndex={0} role="button">
                  <label>Where</label>
                  <span className="val">Anywhere · worldwide</span>
                </div>
                <div
                  className="sf picker"
                  ref={pickerRef}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="listbox"
                  aria-expanded={pickerOpen}
                  aria-controls="catPop"
                  aria-label="What kind of space"
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest(".catopt")) return;
                    pickerOpen ? closePicker(false) : openPicker();
                  }}
                  onKeyDown={onPickerKeyDown}
                >
                  <label>What</label>
                  <span className="val">
                    {selected.cat && (
                      <span
                        className={`seldot${selected.shower ? " dot-shower" : ""}`}
                        style={{ background: selected.dot }}
                        aria-hidden="true"
                      />
                    )}
                    <span id="whatText">{selected.val}</span>
                    <svg className="caret" viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                  <ul className={`catpop${pickerOpen ? " open" : ""}`} id="catPop" role="listbox" aria-label="Space categories">
                    {CATEGORIES.map((c, i) => (
                      <li
                        key={c.val}
                        ref={(el) => {
                          optionRefs.current[i] = el;
                        }}
                        className={`catopt${highlightIdx === i && pickerOpen ? " hl" : ""}`}
                        role="option"
                        tabIndex={-1}
                        aria-selected={selectedIdx === i}
                        onClick={(e) => {
                          e.stopPropagation();
                          choose(i);
                        }}
                        onMouseMove={() => pickerOpen && setHighlightIdx(i)}
                      >
                        {c.plus ? (
                          <span className="plusdot">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        ) : (
                          <span className={`d${c.shower ? " dot-shower" : ""}`} style={{ background: c.dot }} />
                        )}
                        {c.val}
                        <small>{c.small}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sf" tabIndex={0} role="button">
                  <label>When</label>
                  <span className="val ph">Add dates</span>
                </div>
                <button className="search-go" type="submit" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </form>

              <div className="hero-badges reveal d4">
                <span className="chip"><ShieldCheck /> Verified hosts &amp; guests</span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M2 12h20M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21" />
                  </svg>
                  120+ countries
                </span>
                <span className="chip"><Check /> Free stays available</span>
              </div>
            </div>

            <div className="hero-vis">
              <div className="float f1">
                <span className="ic" style={{ background: "rgba(134,195,225,.2)", color: "#3f95bf" }}>
                  <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M3 12h18M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M4 19v-4h16v4M6 19v2M18 19v2" />
                  </svg>
                </span>
                <div>Sleep in Lisbon<small>$26 / night · verified</small></div>
              </div>
              <div className="float f2">
                <span className="ic" style={{ background: "rgba(46,158,91,.14)", color: "#2E9E5B" }}>
                  <ShieldCheck />
                </span>
                <div>ID verified<small>Both hosts &amp; guests</small></div>
              </div>
              <div className="float f3">
                <span className="ic" style={{ background: "rgba(255,100,43,.14)", color: "var(--primary)" }}>
                  <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <div>You earned $340<small>3 stays this week</small></div>
              </div>
              <div className="phone" role="img" aria-label="Corneroom mobile app cycling through spaces to book worldwide">
                <span className="notch" />
                <div className="screen stack" ref={heroStackRef}>
                  {HERO_SCREENS.map((s, i) => (
                    <img
                      key={s.src}
                      className={heroIdx === i ? "on" : undefined}
                      src={s.src}
                      alt={s.alt}
                      width={270}
                      height={585}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STATS BAND */}
          <div className="trustband reveal">
            <div className="wrap">
              <div className="stat"><b>120<em>+</em></b><span>Countries live</span></div>
              <div className="stat"><b>48k<em>+</em></b><span>Spaces shared</span></div>
              <div className="stat"><b><em>&amp;</em> more</b><span>Space categories</span></div>
              <div className="stat"><b>4.8<em>★</em></b><span>Avg guest rating</span></div>
              <div className="stat"><b>100<em>%</em></b><span>Verified community</span></div>
            </div>
          </div>
        </section>

        {/* ============================== CATEGORY GRID ============================== */}
        <section className="sec" id="explore">
          <div className="wrap">
            <div className="sec-head c reveal">
              <p className="eyebrow">Explore by category</p>
              <h2>A space for every kind of trip</h2>
              <p>
                From a bed for the night to a desk for the afternoon — book what you actually need, at prices that
                fit real budgets.
              </p>
            </div>
            <div className="cats">
              <a className="cat reveal" href="#explore">
                <img loading="lazy" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=75&auto=format&fit=crop" alt="Cozy sunlit bedroom with soft linens for an affordable overnight stay" width={220} height={293} />
                <span className="lbl"><b><span className="dot" style={{ background: cssVar("sleep") }} />Sleep</b><small>Beds &amp; rooms</small></span>
              </a>
              <a className="cat reveal d1" href="#explore">
                <img loading="lazy" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=75&auto=format&fit=crop" alt="Bright home office desk set up as a quiet workspace to book by the hour" width={220} height={293} />
                <span className="lbl"><b><span className="dot" style={{ background: cssVar("work") }} />Work</b><small>Desks &amp; studios</small></span>
              </a>
              <a className="cat reveal d2" href="#explore">
                <img loading="lazy" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=75&auto=format&fit=crop" alt="Clean modern bathroom with a walk-in shower available to book" width={220} height={293} />
                <span className="lbl"><b><span className="dot dot-shower" style={{ background: cssVar("shower") }} />Shower</b><small>Fresh &amp; clean</small></span>
              </a>
              <a className="cat reveal d3" href="#explore">
                <img loading="lazy" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=75&auto=format&fit=crop" alt="Small boat moored at a calm harbour for a day on the water" width={220} height={293} />
                <span className="lbl"><b><span className="dot" style={{ background: cssVar("boat") }} />Boat</b><small>On the water</small></span>
              </a>
              <a className="cat reveal d4" href="#explore">
                <img loading="lazy" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=75&auto=format&fit=crop" alt="Friends gathered around a table sharing food and conversation" width={220} height={293} />
                <span className="lbl"><b><span className="dot" style={{ background: cssVar("social") }} />Social</b><small>Meet &amp; hang out</small></span>
              </a>
              <a className="cat more reveal d4" href="#explore">
                <span className="plus">
                  <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <b>&amp; more</b>
                <small>New categories keep landing</small>
              </a>
            </div>
          </div>
        </section>

        {/* ============================== FEATURED LISTINGS ============================== */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head reveal" style={{ maxWidth: "44rem" }}>
              <p className="eyebrow">Featured spaces</p>
              <h2>Real spaces, real prices, real people</h2>
              <p>A snapshot of the kinds of spaces on Corneroom — every host and guest is verified before they book.</p>
            </div>

            <div className="filterbar reveal">
              {FILTERS.map((f) => (
                <button
                  key={f.cat}
                  className={`pill${activeCat === f.cat ? " active" : ""}`}
                  onClick={() => setActiveCat(f.cat)}
                >
                  <span className={`d${f.shower ? " dot-shower" : ""}`} style={{ background: f.dot }} />
                  {f.label}
                </button>
              ))}
            </div>

            <div className="listings">
              {/* card 1 */}
              <article className="lc reveal">
                <div className="lc-media">
                  <span className="lc-tag"><span className="d" style={{ background: cssVar("sleep") }} />Sleep</span>
                  <button className="lc-fav" aria-label="Save"><Heart /></button>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=75&auto=format&fit=crop" alt="Sunlit bedroom with a made bed and plants in Lisbon" width={290} height={217} />
                </div>
                <div className="lc-body">
                  <div className="lc-top"><span className="lc-city">Alfama, Lisbon</span><span className="lc-rate"><Star />4.92</span></div>
                  <p className="lc-desc">Bright private room, 5 min from the tram</p>
                  <span className="lc-host"><span className="vf"><Check /></span>Verified host · Sofia</span>
                  <div className="lc-price"><b>$26</b><span>/ night</span></div>
                </div>
              </article>

              {/* card 2 */}
              <article className="lc reveal d1">
                <div className="lc-media">
                  <span className="lc-tag"><span className="d" style={{ background: cssVar("work") }} />Work</span>
                  <button className="lc-fav" aria-label="Save"><Heart /></button>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=75&auto=format&fit=crop" alt="Quiet desk with a lamp and chair set up as a workspace in Berlin" width={290} height={217} />
                </div>
                <div className="lc-body">
                  <div className="lc-top"><span className="lc-city">Kreuzberg, Berlin</span><span className="lc-rate"><Star />4.88</span></div>
                  <p className="lc-desc">Focused desk + fast wifi, book by the hour</p>
                  <span className="lc-host"><span className="vf"><Check /></span>Verified host · Jonas</span>
                  <div className="lc-price"><b>$7</b><span>/ hour</span></div>
                </div>
              </article>

              {/* card 3 */}
              <article className="lc reveal d2">
                <div className="lc-media">
                  <span className="lc-tag"><span className="d" style={{ background: cssVar("boat") }} />Boat</span>
                  <button className="lc-fav" aria-label="Save"><Heart /></button>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=75&auto=format&fit=crop" alt="Wooden sailboat moored on calm blue water near Split" width={290} height={217} />
                </div>
                <div className="lc-body">
                  <div className="lc-top"><span className="lc-city">Marina, Split</span><span className="lc-rate"><Star />4.97</span></div>
                  <p className="lc-desc">Half-day on a classic sailboat, skipper included</p>
                  <span className="lc-host"><span className="vf"><Check /></span>Verified host · Marko</span>
                  <div className="lc-price"><b>$44</b><span>/ half-day</span></div>
                </div>
              </article>

              {/* card 4 */}
              <article className="lc reveal d3">
                <div className="lc-media">
                  <span className="lc-tag"><span className="d" style={{ background: cssVar("social") }} />Social</span>
                  <button className="lc-fav" aria-label="Save"><Heart /></button>
                  <img loading="lazy" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=75&auto=format&fit=crop" alt="Warm rooftop table set for friends to gather at sunset in Mexico City" width={290} height={217} />
                </div>
                <div className="lc-body">
                  <div className="lc-top"><span className="lc-city">Roma Norte, CDMX</span><span className="lc-rate"><Star />4.90</span></div>
                  <p className="lc-desc">Rooftop dinner &amp; local hangout, all welcome</p>
                  <span className="lc-host"><span className="vf"><Check /></span>Verified host · Lucía</span>
                  <div className="lc-price free"><b>Free</b><span>· community stay</span></div>
                </div>
              </article>
            </div>
            <p className="illus-note center">Sample spaces — hosts, prices &amp; ratings shown to illustrate the app.</p>
          </div>
        </section>

        {/* ============================== HOW IT WORKS ============================== */}
        <section className="sec how" id="how">
          <div className="wrap">
            <div className="sec-head c reveal">
              <p className="eyebrow">Two sides, one community</p>
              <h2>How Corneroom works</h2>
            </div>
            <div className="center">
              <div className="how-tabs reveal" role="tablist" aria-label="How it works">
                <span className={`how-thumb${hostTab ? " right" : ""}`} />
                <button className={`how-tab${hostTab ? "" : " active"}`} id="tab-guest" role="tab" aria-selected={!hostTab} onClick={() => setHostTab(false)}>
                  I&apos;m a guest
                </button>
                <button className={`how-tab${hostTab ? " active" : ""}`} id="tab-host" role="tab" aria-selected={hostTab} onClick={() => setHostTab(true)}>
                  I&apos;m a host
                </button>
              </div>
            </div>

            <div className={`panel${hostTab ? "" : " show"}`} id="panel-guest" role="tabpanel" aria-labelledby="tab-guest" hidden={hostTab}>
              <div className="steps">
                <div className="step reveal"><div className="n">1</div><h3>Search &amp; discover</h3><p>Tell us where you&apos;re headed and what you need — a bed, a desk, a shower &amp; more. Browse real spaces near you.</p></div>
                <div className="step reveal d1"><div className="n">2</div><h3>Get verified &amp; book</h3><p>Verify your ID once — every guest and host does. Then book affordable spaces, including genuinely free community stays.</p></div>
                <div className="step reveal d2"><div className="n">3</div><h3>Show up &amp; belong</h3><p>Meet your host, settle in, and travel like a local. Leave a review to keep the community trusted worldwide.</p></div>
              </div>
            </div>

            <div className={`panel${hostTab ? " show" : ""}`} id="panel-host" role="tabpanel" aria-labelledby="tab-host" hidden={!hostTab}>
              <div className="steps">
                <div className="step reveal"><div className="n">1</div><h3>List your space</h3><p>Share a spare room, a desk, a shower, a boat &amp; more. Add photos, set your price, choose your availability.</p></div>
                <div className="step reveal d1"><div className="n">2</div><h3>Welcome verified guests</h3><p>Every guest is ID-verified before they arrive. Message, approve, and host with confidence.</p></div>
                <div className="step reveal d2"><div className="n">3</div><h3>Get paid, keep going</h3><p>Earn on your terms with fast, secure payouts. Turn space you already have into steady income.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== WORLDWIDE ============================== */}
        <section className="sec world" id="world">
          <div className="wrap world-grid">
            <div className="world-map reveal">
              <img loading="lazy" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=70&auto=format&fit=crop" alt="Stylized world map showing Corneroom spaces available across continents" width={520} height={440} />
              <div className="world-pins" aria-hidden="true">
                <b style={{ top: "34%", left: "28%" }} />
                <b style={{ top: "30%", left: "50%" }} />
                <b style={{ top: "62%", left: "44%" }} />
                <b style={{ top: "48%", left: "78%" }} />
              </div>
            </div>
            <div className="world-copy">
              <p className="eyebrow" style={{ color: cssVar("coral") }}>Worldwide by design</p>
              <h2 style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)", marginTop: ".6rem" }}>Spaces in 120+ countries — and growing</h2>
              <p style={{ color: "rgba(246,235,226,.72)", fontSize: "1.08rem", marginTop: ".9rem" }}>
                From a hammock in Bali to a co-working nook in Nairobi, Corneroom connects a real, verified community
                across the globe. Wherever you land, there&apos;s an affordable space nearby — and someone glad you came.
              </p>
              <div className="world-stats">
                <div className="wstat reveal"><b>120+</b><span>Countries live today</span></div>
                <div className="wstat reveal d1"><b>1,900+</b><span>Cities with spaces</span></div>
                <div className="wstat reveal d2"><b>48k+</b><span>Spaces shared</span></div>
                <div className="wstat reveal d3"><b>&amp; more</b><span>Categories to explore</span></div>
              </div>
              <div style={{ marginTop: "1.8rem" }}><a href="#explore" className="btn btn-primary btn-lg">Explore spaces near you</a></div>
            </div>
          </div>
        </section>

        {/* ============================== TRUST ============================== */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c reveal">
              <p className="eyebrow">Built on trust</p>
              <h2>Verified on both sides, always</h2>
              <p>Corneroom isn&apos;t anonymous. Hosts and guests both verify who they are — so the whole community feels safe to open its doors.</p>
            </div>
            <div className="trust-cards">
              <div className="tcard reveal">
                <div className="ic"><ShieldCheck /></div>
                <h3>ID verified, both sides</h3>
                <p>Every host and every guest verifies their identity before a single booking. No exceptions.</p>
              </div>
              <div className="tcard reveal d1">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 15h4" />
                  </svg>
                </div>
                <h3>Secure payments</h3>
                <p>Pay and get paid safely through Corneroom. Money is only released once your stay is confirmed.</p>
              </div>
              <div className="tcard reveal d2">
                <div className="ic"><Star /></div>
                <h3>Real reviews</h3>
                <p>Honest ratings from real stays keep the community accountable and easy to trust.</p>
              </div>
              <div className="tcard reveal d3">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                </div>
                <h3>Community-first support</h3>
                <p>Real people, ready to help hosts and guests any time — because community means showing up.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== HOST TEASER ============================== */}
        <section className="sec host" id="host">
          <div className="wrap host-grid">
            <div className="host-copy">
              <p className="eyebrow reveal">Earn as a host</p>
              <h2 className="reveal d1" style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)", marginTop: ".6rem" }}>Your spare space could be earning</h2>
              <p className="reveal d2" style={{ fontSize: "1.1rem", color: cssVar("ink-2"), marginTop: ".9rem" }}>
                Got a room you don&apos;t use, a desk that sits empty, a boat in the marina? Share it on Corneroom and
                earn from space you already have — welcoming verified guests from around the world.
              </p>
              <ul className="reveal d3">
                <li><Check /><span>Set your own prices and availability</span></li>
                <li><Check /><span>Only ever host verified guests</span></li>
                <li><Check /><span>Fast, secure payouts after each stay</span></li>
              </ul>
              <div className="reveal d4"><a href="#app" className="btn btn-primary btn-lg">Start hosting</a></div>
            </div>

            <div className="earn-card reveal d2" ref={earnCardRef}>
              <p className="eyebrow">Illustrative earnings</p>
              <div className="earn-big"><b>${earnValue.toLocaleString()}</b><span>/ month avg per spare room</span></div>
              <p className="muted" style={{ fontSize: ".88rem" }}>Based on hosts sharing one spare room a few nights a week — your earnings vary by city, category &amp; availability.</p>
              <div className="earn-bar"><i style={{ width: `${barWidth}%` }} /></div>
              <div className="earn-rows">
                <div className="earn-row"><span><span className="dot" style={{ background: cssVar("sleep"), display: "inline-block", width: 8, height: 8, borderRadius: "50%", marginRight: ".4rem" }} />Sleep · spare room</span><b>$2,400/mo</b></div>
                <div className="earn-row"><span><span className="dot" style={{ background: cssVar("work"), display: "inline-block", width: 8, height: 8, borderRadius: "50%", marginRight: ".4rem" }} />Work · desk by the hour</span><b>$680/mo</b></div>
                <div className="earn-row"><span><span className="dot" style={{ background: cssVar("boat"), display: "inline-block", width: 8, height: 8, borderRadius: "50%", marginRight: ".4rem" }} />Boat · weekend half-days</span><b>$1,150/mo</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== TESTIMONIALS ============================== */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head c reveal">
              <p className="eyebrow">From the community</p>
              <h2>Loved by travelers and hosts</h2>
            </div>
            <div className="tst">
              <figure className="quote reveal">
                <div className="stars" aria-label="5 out of 5"><Star /><Star /><Star /><Star /><Star /></div>
                <p>&ldquo;I found an affordable room in a city I&apos;d never been to and left with real friends. Knowing my host was verified made it easy to say yes.&rdquo;</p>
                <figcaption className="who"><img loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=75&auto=format&fit=crop" alt="Portrait of Amara, a Corneroom guest" width={44} height={44} /><span><b>Amara O.</b><small>Guest · Nairobi → Lisbon</small></span></figcaption>
              </figure>

              <figure className="quote reveal d1">
                <div className="stars" aria-label="5 out of 5"><Star /><Star /><Star /><Star /><Star /></div>
                <p>&ldquo;My spare room used to sit empty. Now it covers my rent most months, and I&apos;ve met people from six countries — all verified before they arrive.&rdquo;</p>
                <figcaption className="who"><img loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=75&auto=format&fit=crop" alt="Portrait of Daniel, a Corneroom host" width={44} height={44} /><span><b>Daniel R.</b><small>Host · Berlin</small></span></figcaption>
              </figure>

              <figure className="quote reveal d2">
                <div className="stars" aria-label="5 out of 5"><Star /><Star /><Star /><Star /><Star /></div>
                <p>&ldquo;Between flights I booked a shower and a quiet desk for a few hours. Cheap, clean, and so easy — Corneroom just gets how travelers actually move.&rdquo;</p>
                <figcaption className="who"><img loading="lazy" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=120&q=75&auto=format&fit=crop" alt="Portrait of Mei, a Corneroom guest" width={44} height={44} /><span><b>Mei L.</b><small>Guest · Singapore</small></span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ============================== APP CTA ============================== */}
        <section className="sec" id="app">
          <div className="wrap">
            <div className="appcta reveal">
              <div className="appcta-in">
                <div>
                  <h2>Your next space is in your pocket</h2>
                  <p>Search, book, host and message — all from the Corneroom app. Join a verified community sharing affordable spaces worldwide.</p>
                  <div className="stores">
                    <a className="store" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.03-.02-2.1-.8-2.1-3.2ZM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .07 1.9-.5 2.5-1.2Z" /></svg>
                      <span><small>Download on the</small><b>App Store</b></span>
                    </a>
                    <a className="store" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3Zm12.5 12.5-3.1-3.1v-.2l3.1-3.1.1.04 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1.04Zm-.4.4-3.2-3.2-9.4 9.4c.4.4 1 .4 1.7.05l10.9-6.3Zm0-8-10.9-6.3c-.7-.4-1.3-.3-1.7.05l9.4 9.4 3.2-3.2Z" /></svg>
                      <span><small>Get it on</small><b>Google Play</b></span>
                    </a>
                  </div>
                  <p className="illus-note" style={{ color: "rgba(255,255,255,.75)" }}>Corneroom is in beta — join the community shaping it.</p>
                </div>
                <div className="appcta-vis">
                  <div className="phone" role="img" aria-label="Corneroom app host earnings screen">
                    <span className="notch" />
                    <div className="screen"><img loading="lazy" src="/home/screens/earn.png" alt="Corneroom app screen showing host earnings and payouts" width={230} height={498} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================== FOOTER ============================== */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot">
              <div className="foot-brand">
                <Mark />
                Corneroom
              </div>
              <p>Find &amp; share spaces worldwide. A verified, affordable community for travelers and hosts — to sleep, work, shower, boat, socialize &amp; more.</p>
              <div className="foot-social" style={{ marginTop: "1.2rem" }}>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
                <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.3 8.3L23.2 22h-6.6l-5.2-6.8L5.5 22H2.3l7.8-8.9L1.2 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.1 3.8H5.2L17.7 20Z" /></svg></a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.3 2 1.5 3.6 3.5 3.9v2.7c-1.3.1-2.5-.3-3.6-.9v5.7a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.8a2.6 2.6 0 1 0 1.8 2.5V3h2.8Z" /></svg></a>
              </div>
              <div className="foot-discover" style={{ marginTop: "1.6rem" }}>
                <h4 style={{ marginBottom: ".7rem" }}>Discover</h4>
                <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: ".5rem .9rem" }}>
                  <li><a href="/couchsurfing-alternative">Couchsurfing alternative</a></li>
                  <li><a href="/airbnb-alternative">Airbnb alternative</a></li>
                  <li><a href="/free-places-to-stay">Free places to stay</a></li>
                </ul>
              </div>
            </div>
            <div className="foot">
              <h4>Explore</h4>
              <ul>
                <li><a href="#explore">Sleep</a></li>
                <li><a href="#explore">Work</a></li>
                <li><a href="#explore">Shower</a></li>
                <li><a href="#explore">Boat &amp; more</a></li>
              </ul>
            </div>
            <div className="foot">
              <h4>Hosting</h4>
              <ul>
                <li><a href="#host">List your space</a></li>
                <li><a href="#host">Host earnings</a></li>
                <li><a href="/safety">Verification</a></li>
                <li><a href="#host">Payouts</a></li>
              </ul>
            </div>
            <div className="foot">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/community-standards">Community standards</a></li>
                <li><a href="/safety">Safety</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Corneroom · Find &amp; share spaces worldwide.</span>
            <span>Affordable spaces · a verified community · worldwide</span>
          </div>
        </div>
      </footer>

      {/* ============================== STICKY MOBILE APP CTA (portal) ============================== */}
      {mounted &&
        !barDismissed &&
        createPortal(
          <aside
            className={`home-appbar${barShown ? " show" : ""} ${fontVars}`}
            aria-label="Get the Corneroom app"
          >
            <Mark />
            <span className="txt"><b>Get the Corneroom app</b><small>Book &amp; host spaces worldwide</small></span>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn">Get the app</a>
            <button className="close" type="button" aria-label="Dismiss app banner" onClick={() => setBarDismissed(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </aside>,
          document.body
        )}
    </div>
  );
}
