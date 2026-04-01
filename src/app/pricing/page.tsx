import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Pricing — Corneroom",
  description:
    "Transparent, fair pricing for guests and hosts. First booking free for new guests. Free to list for hosts. No hidden fees.",
};

export default function PricingPage() {
  return (
    <LegalLayout title="Pricing" lastUpdated="March 2026">
      {/* ── Hero ── */}
      <div className="-mx-6 -mt-4 mb-10 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/10 px-6 py-10 text-center lg:-mx-10 lg:px-10">
        <p className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Fair pricing for everyone
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/50">
          Corneroom was built on a simple belief: access to space should never be
          gatekept by unfair fees. Whether you are a guest exploring the world or
          a host sharing what you have, our pricing is transparent, capped, and
          designed to keep things fair.
        </p>
      </div>

      {/* ── For Guests ── */}
      <h2>For Guests</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-2xl">🎁</p>
          <p className="mt-2 text-base font-semibold text-white">
            First booking free
          </p>
          <p className="mt-1 text-sm text-white/50">
            Every new guest gets their very first booking at no cost — no catch,
            no credit card hold. We want you to experience Corneroom before you
            spend a penny.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-2xl">💰</p>
          <p className="mt-2 text-base font-semibold text-white">
            Transparent fees
          </p>
          <p className="mt-1 text-sm text-white/50">
            A small service fee is added to each booking — and you will always
            see it before you confirm. The fee is capped so it never spirals on
            higher-priced listings.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-2xl">🚫</p>
          <p className="mt-2 text-base font-semibold text-white">
            No hidden charges
          </p>
          <p className="mt-1 text-sm text-white/50">
            The price you see on checkout is the price you pay. No cleaning
            fees we forgot to mention, no surprise taxes added at the last step.
          </p>
        </div>
      </div>

      {/* ── For Hosts ── */}
      <h2>For Hosts</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-2xl">✅</p>
          <p className="mt-2 text-base font-semibold text-white">
            Free to list
          </p>
          <p className="mt-1 text-sm text-white/50">
            Creating a listing on Corneroom costs nothing — ever. No
            subscription, no activation fee, no monthly charge. List as many
            spaces as you want.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-2xl">🎯</p>
          <p className="mt-2 text-base font-semibold text-white">
            You set the price
          </p>
          <p className="mt-1 text-sm text-white/50">
            You decide what your space is worth — including free. Corneroom
            never overrides your pricing. Want to offer a couch for $0? Go
            ahead. A premium desk for $50/day? That works too.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-2xl">📉</p>
          <p className="mt-2 text-base font-semibold text-white">
            Small, capped service fee
          </p>
          <p className="mt-1 text-sm text-white/50">
            We take a small percentage on paid bookings to keep the platform
            running. The fee is capped — it will never exceed a fixed maximum no
            matter how much your listing earns.
          </p>
        </div>
      </div>

      {/* ── How Fees Work ── */}
      <h2>How Fees Work</h2>
      <p>
        Corneroom uses a <strong>split-fee model</strong> so that neither side
        bears the full cost of running the platform.
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/8">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/8 bg-white/[0.03]">
              <th className="px-5 py-3 font-semibold text-white">Fee</th>
              <th className="px-5 py-3 font-semibold text-white">Who pays</th>
              <th className="px-5 py-3 font-semibold text-white">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/60">
            <tr>
              <td className="px-5 py-3">Guest service fee</td>
              <td className="px-5 py-3">Guest</td>
              <td className="px-5 py-3">
                Small percentage added at checkout, clearly shown before you
                confirm. Capped on every booking.
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">Host service fee</td>
              <td className="px-5 py-3">Host</td>
              <td className="px-5 py-3">
                Small percentage deducted from the payout. Capped so it never
                exceeds a fixed maximum.
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">Listing fee</td>
              <td className="px-5 py-3">—</td>
              <td className="px-5 py-3">
                <strong className="text-primary">Free, always.</strong> No cost
                to create or maintain a listing.
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">First guest booking</td>
              <td className="px-5 py-3">—</td>
              <td className="px-5 py-3">
                <strong className="text-primary">Free.</strong> New guests pay
                nothing on their first booking — including the service fee.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        All payments are processed securely through <strong>Stripe</strong>,
        supporting credit cards, debit cards, and local payment methods in most
        countries. Hosts receive payouts directly to their bank account or Stripe
        balance.
      </p>

      {/* ── Cancellation Policies ── */}
      <h2>Cancellation Policies</h2>
      <p>
        Every listing on Corneroom displays its cancellation policy upfront so
        you know exactly what to expect before you book. Hosts choose one of
        three policies:
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-green-400">
            Flexible
          </p>
          <p className="mt-2 text-sm text-white/60">
            Full refund if you cancel up to <strong>24 hours</strong> before
            check-in. Best for guests who need maximum flexibility.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Moderate
          </p>
          <p className="mt-2 text-sm text-white/60">
            Full refund if you cancel up to <strong>5 days</strong> before
            check-in. A balanced option for most bookings.
          </p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400">
            Strict
          </p>
          <p className="mt-2 text-sm text-white/60">
            50% refund if you cancel up to <strong>7 days</strong> before
            check-in. No refund after that. Common for high-demand spaces.
          </p>
        </div>
      </div>

      <p className="mt-4">
        Regardless of the policy, if a host cancels on you, you always receive a{" "}
        <strong>full refund</strong> — no questions asked.
      </p>

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions</h2>

      <h3>Is it really free to list a space?</h3>
      <p>
        Yes. There is no subscription, no activation fee, and no per-listing
        charge. You can list one space or one hundred — it costs nothing.
      </p>

      <h3>How does the first free booking work?</h3>
      <p>
        When you create a new guest account on Corneroom, your first booking is
        completely free — the host still gets paid (we cover it), and you pay
        nothing, not even the service fee. This applies to any listing,
        regardless of price.
      </p>

      <h3>What is the service fee percentage?</h3>
      <p>
        We keep our service fee competitive and capped. The exact percentage may
        vary by region and space category, but it is always shown transparently
        before you confirm a booking. You will never be surprised.
      </p>

      <h3>Can hosts list their space for free?</h3>
      <p>
        Absolutely. Hosts can set any price they want, including $0. Many
        couchsurfing-style hosts list their spaces for free — it is part of what
        makes Corneroom special. On free listings, there is no service fee for
        either party.
      </p>

      <h3>Are there any hidden fees?</h3>
      <p>
        No. The total you see at checkout is the total you pay. We do not add
        cleaning fees, processing fees, or last-minute surcharges. What you see
        is what you get.
      </p>

      <h3>How do payouts work for hosts?</h3>
      <p>
        Payouts are processed through Stripe. After a guest checks in, the
        payout is released to your connected bank account or Stripe balance.
        Payout timing depends on your country but is typically 1 to 5 business
        days.
      </p>

      <h3>What happens if I need to cancel?</h3>
      <p>
        Your refund depends on the cancellation policy the host selected for
        their listing — Flexible, Moderate, or Strict. The policy is always
        visible on the listing page and at checkout. If the host cancels, you
        receive a full refund automatically.
      </p>

      <h3>Do I need to pay to message a host?</h3>
      <p>
        No. Messaging is completely free. You can contact any host before booking
        to ask questions, confirm availability, or just say hello.
      </p>
    </LegalLayout>
  );
}
