import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata = { title: "Support — Corneroom" };

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
    a: "Go to your bookings in the app and select the booking you want to cancel. Refund amounts depend on the host's cancellation policy (Flexible, Moderate, or Strict), which is displayed before you book.",
  },
  {
    q: "How do I delete my account?",
    a: "You can delete your account from the app (Settings → Account → Delete Account) or by visiting our account deletion page.",
  },
  {
    q: "Is Corneroom safe?",
    a: "We verify host identities and locations, process payments securely through Stripe (PCI DSS Level 1), and have a review system so you can see feedback from other users. We also have 24/7 support for urgent safety concerns.",
  },
  {
    q: "What types of spaces can I list?",
    a: "Almost anything — spare rooms, couches, entire apartments, co-working desks, home offices, showers, boats, bar tables, and more. The space must be legal to share in your jurisdiction.",
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
    q: "I'm having trouble with the app. What should I do?",
    a: "Try restarting the app or updating to the latest version. If the issue persists, contact us via the form below or email support@corneroom.com.",
  },
];

export default function SupportPage() {
  return (
    <LegalLayout title="Help & Support" lastUpdated="March 31, 2026">
      <p>
        Need help with Corneroom? Find answers below or reach out to our support team.
      </p>

      <h2>Frequently Asked Questions</h2>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="!mt-0 text-sm font-semibold text-white">{faq.q}</h3>
            <p className="mt-2 text-sm text-white/50">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Account Deletion</h2>
      <p>
        To delete your Corneroom account and all associated data, visit our{" "}
        <Link href="/delete-account" className="text-primary underline">Account Deletion page</Link>.
      </p>

      <h2>Contact Support</h2>
      <p>If you can&apos;t find the answer you need:</p>
      <ul>
        <li>Email: <a href="mailto:support@corneroom.com">support@corneroom.com</a></li>
        <li>In-app: Settings → Help & Support</li>
        <li>Response time: We aim to respond within 24 hours</li>
      </ul>

      <p>
        For urgent safety concerns, email <a href="mailto:safety@corneroom.com">safety@corneroom.com</a> —
        these are prioritized and handled 24/7.
      </p>
    </LegalLayout>
  );
}
