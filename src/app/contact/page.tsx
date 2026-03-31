import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Contact — Corneroom" };

export default function ContactPage() {
  return (
    <LegalLayout title="Contact Us" lastUpdated="March 31, 2026">
      <p>
        We&apos;d love to hear from you. Whether you have a question, feedback, or need help —
        reach out through any of the channels below.
      </p>

      <h2>General Inquiries</h2>
      <ul>
        <li>Email: <a href="mailto:info@corneroom.com">info@corneroom.com</a></li>
      </ul>

      <h2>Support</h2>
      <ul>
        <li>Email: <a href="mailto:support@corneroom.com">support@corneroom.com</a></li>
        <li>In-app: Settings → Help & Support</li>
        <li>Web: <a href="/support">corneroom.com/support</a></li>
      </ul>

      <h2>Privacy & Data Requests</h2>
      <ul>
        <li>Email: <a href="mailto:privacy@corneroom.com">privacy@corneroom.com</a></li>
        <li>Account deletion: <a href="/delete-account">corneroom.com/delete-account</a></li>
      </ul>

      <h2>Press & Media</h2>
      <ul>
        <li>Email: <a href="mailto:press@corneroom.com">press@corneroom.com</a></li>
      </ul>

      <h2>Company</h2>
      <p>
        <strong>Inspired Technologies & Business Solutions Inc.</strong><br />
        180 John St<br />
        Toronto, ON M5T 1X5<br />
        Canada
      </p>

      <h2>Response Times</h2>
      <ul>
        <li><strong>General inquiries:</strong> 2–3 business days</li>
        <li><strong>Support:</strong> within 24 hours</li>
        <li><strong>Privacy/data requests:</strong> within 30 days</li>
        <li><strong>Safety concerns:</strong> prioritized 24/7 — email <a href="mailto:safety@corneroom.com">safety@corneroom.com</a></li>
      </ul>
    </LegalLayout>
  );
}
