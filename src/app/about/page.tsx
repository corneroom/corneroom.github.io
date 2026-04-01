import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "About — Corneroom",
  description:
    "Corneroom is a global space-sharing platform connecting travelers with every kind of space — from couches and co-working desks to showers, boats, and parking spots.",
};

export default function AboutPage() {
  return (
    <LegalLayout title="About Corneroom" lastUpdated="March 2026">
      <p>
        Hotels solve one problem. Corneroom solves the rest.
      </p>
      <p>
        We are a global space-sharing platform that connects travelers with
        hosts who have space to share — not just beds, but{" "}
        <strong>any space</strong>. A couch for the night. A desk for the
        afternoon. A shower after a red-eye. A parking spot downtown. A boat
        slip for the weekend. Storage for your gear while you explore a new
        city. A nightlife table you would never get on your own.
      </p>

      {/* ── Mission ── */}
      <h2>Our Mission</h2>
      <p>
        To make every unused space in the world useful to someone who needs it.
        We believe access matters more than ownership, and that the best travel
        experiences happen when real people open real doors. Corneroom exists to
        connect travelers and hosts across 120+ countries through a single,
        trusted platform — one that treats a parking garage in Osaka with the
        same care as a penthouse in Paris.
      </p>

      {/* ── The Problem ── */}
      <h2>The Problem We Solve</h2>
      <p>
        Travel infrastructure was built around one assumption: that travelers
        need a room with a bed. But anyone who has landed at 5 AM with nowhere
        to shower, or circled a foreign city block for 40 minutes looking for
        parking, or worked from a noisy hostel lobby knows the truth —{" "}
        <strong>travelers need spaces, not just rooms</strong>.
      </p>
      <p>
        On the other side, millions of hosts have capacity going to waste. An
        empty driveway during work hours. A spare desk in a home office. A boat
        that sits idle five days a week. Corneroom bridges that gap, turning
        dead space into income for hosts and into access for guests.
      </p>

      {/* ── Our Story ── */}
      <h2>Our Story</h2>
      <p>
        Corneroom started the way most honest ideas do — out of personal
        frustration. Our founding team were seasoned couchsurfers who knew the
        magic of staying with a local, but also knew the friction: outdated
        platforms, inconsistent trust signals, zero coverage for anything beyond
        a couch.
      </p>
      <p>
        We built the couchsurfing experience we wished existed — verified hosts,
        real reviews, instant booking — then asked a bigger question:{" "}
        <em>why stop at sleep?</em> If we could connect a traveler with a spare
        couch, we could connect them with a spare desk, a spare shower, a spare
        dock. Every category we added unlocked a new way to travel, and a new
        way for hosts to earn.
      </p>
      <p>
        Today, Corneroom spans seven space categories —{" "}
        <strong>
          Sleep, Work, Shower, Boat, Nightlife, Parking, and Storage
        </strong>{" "}
        — with more on the way. Each one was shaped by the travelers who asked
        for it and the hosts who made it possible.
      </p>

      {/* ── By the Numbers ── */}
      <h2>Corneroom by the Numbers</h2>
      <ul>
        <li>
          <strong>120+ countries</strong> with active listings
        </li>
        <li>
          <strong>10,000+ spaces</strong> listed and verified
        </li>
        <li>
          <strong>50,000+ guests</strong> served worldwide
        </li>
        <li>
          <strong>4.8 average rating</strong> across all bookings
        </li>
        <li>
          <strong>7 space categories</strong> — and counting
        </li>
      </ul>

      {/* ── Values ── */}
      <h2>What We Stand For</h2>

      <h3>Inclusivity, Without Exception</h3>
      <p>
        Corneroom is proudly LGBTQ+ friendly. We enforce a strict
        non-discrimination policy for every host and every guest. If a space is
        listed on our platform, it is open to everyone — full stop. Hosts who
        violate this are removed, not warned.
      </p>

      <h3>Safety You Can Verify</h3>
      <p>
        Every host on Corneroom goes through identity verification. Listings are
        reviewed, ratings are transparent, and our trust system is designed so
        that the information you need to feel safe is never hidden behind a
        booking wall. We also maintain a 24/7 safety line for guests in any
        country.
      </p>

      <h3>Community Over Transactions</h3>
      <p>
        We are not just a marketplace. The best hosts on Corneroom are the ones
        who leave local restaurant recommendations in the listing description,
        who text you transit directions before you arrive, who treat a stranger
        like a neighbor. We build tools that reward that behavior because it is
        the reason this platform works.
      </p>

      <h3>Sustainability by Design</h3>
      <p>
        Sharing existing spaces is inherently more sustainable than building new
        ones. Every couch booked is a hotel room that did not need to be built.
        Every shared desk is an office that did not need to be leased. We track
        and publish our estimated carbon offset annually because we believe
        platforms should measure what they claim to value.
      </p>

      {/* ── Team Vision ── */}
      <h2>The Team</h2>
      <p>
        Corneroom is built by a small, focused team at{" "}
        <strong>Inspired Technologies &amp; Business Solutions Inc.</strong>,
        headquartered in Toronto, Canada. We are engineers, designers, and
        operators who have collectively traveled to over 60 countries — not as
        tourists, but as the kind of travelers who sleep on couches, work from
        cafes, and know what it means to need a space that does not exist on any
        legacy platform.
      </p>
      <p>
        We are intentionally small because we believe the best products come
        from teams that use what they build. Every feature ships because someone
        on the team needed it on a trip. That is our quality bar.
      </p>

      {/* ── Company Info ── */}
      <h2>Company</h2>
      <p>
        <strong>Inspired Technologies &amp; Business Solutions Inc.</strong>
        <br />
        180 John Street
        <br />
        Toronto, ON M5T 1X5
        <br />
        Canada
      </p>

      <p>
        For press inquiries, partnership proposals, or general questions, reach
        us through our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalLayout>
  );
}
