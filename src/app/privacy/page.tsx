import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Corneroom",
  description:
    "Corneroom's Privacy Policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 2, 2026">
      <p>
        Corneroom is operated by Inspired Technologies Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;), 180 John St, Toronto, ON M5T 1X5, Canada. We operate the Corneroom mobile
        application and website (corneroom.com). This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you use our platform.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Account information:</strong> name, email address, phone number, profile photo</li>
        <li><strong>Identity verification:</strong> government-issued ID, selfie for host verification</li>
        <li><strong>Listing information:</strong> space descriptions, photos, pricing, availability, amenities</li>
        <li><strong>Booking information:</strong> dates, guest count, special requests</li>
        <li><strong>Payment information:</strong> processed securely by our payment processor — we do not store full card numbers</li>
        <li><strong>Communications:</strong> messages between hosts and guests, support inquiries</li>
        <li><strong>Reviews and ratings</strong></li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Device information:</strong> device type, operating system, unique device identifiers</li>
        <li><strong>Location data:</strong> GPS coordinates (with your permission) for nearby spaces and host verification</li>
        <li><strong>Usage data:</strong> pages visited, features used, search queries, interaction patterns</li>
        <li><strong>Log data:</strong> IP address, browser type, access times, crash reports</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <ul>
        <li><strong>Social sign-in providers:</strong> name, email, profile photo</li>
        <li><strong>Payment processor:</strong> transaction status, payout information</li>
        <li><strong>Analytics providers:</strong> aggregated usage patterns</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide, maintain, and improve our platform</li>
        <li>Process bookings and payments between hosts and guests</li>
        <li>Verify host identity and location</li>
        <li>Send booking confirmations, reminders, and support communications</li>
        <li>Enable messaging between hosts and guests</li>
        <li>Personalize your experience (nearby spaces, recommendations)</li>
        <li>Detect and prevent fraud, abuse, and safety issues</li>
        <li>Comply with legal obligations</li>
        <li>Analyze usage patterns to improve the platform</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell your personal information. We share information only as follows:</p>
      <ul>
        <li><strong>With other users:</strong> Your profile, listings, and reviews are visible to other users. When you book, relevant details are shared with the host (and vice versa).</li>
        <li><strong>Payment processing:</strong> Our payment processor handles all payments. You can review your provider&apos;s privacy policy for details.</li>
        <li><strong>Service providers:</strong> our analytics and push-notification providers, a mapping provider (location services), and cloud hosting providers.</li>
        <li><strong>Legal requirements:</strong> When required by law, court order, or to protect safety.</li>
        <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to
        provide our services. After account deletion, we retain certain data for up to 90 days for
        fraud prevention and legal compliance (e.g., financial transaction records as required by law).
      </p>

      <h2>5. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li><strong>Access</strong> your personal data</li>
        <li><strong>Correct</strong> inaccurate information</li>
        <li><strong>Delete</strong> your account and associated data (see <a href="/delete-account">Account Deletion</a>)</li>
        <li><strong>Export</strong> your data in a portable format</li>
        <li><strong>Opt out</strong> of marketing communications</li>
        <li><strong>Withdraw consent</strong> for location tracking or push notifications via device settings</li>
      </ul>
      <p>To exercise these rights, reach us through our <a href="/support">Support page</a>.</p>

      <h2>6. Location Data</h2>
      <p>
        Corneroom uses location data to show nearby spaces, enable map-based search, and verify host
        locations. Location access is requested via your device&apos;s permission system. You can revoke
        location permissions at any time in your device settings. The app functions with limited
        features without location access.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        Corneroom is not directed at children under 16. We do not knowingly collect personal information
        from children. If we become aware that a child under 16 has provided personal information, we
        will delete it promptly. If you believe a child has provided us with personal data, contact
        us through our <a href="/support">Support page</a>.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your own. We use
        secure cloud infrastructure and take appropriate safeguards to ensure your data is
        protected in accordance with this policy and applicable data protection laws, including GDPR
        for users in the European Economic Area.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement industry-standard security measures including encryption in transit (TLS),
        encryption at rest, secure authentication, and regular security audits. Payment data
        is handled by our PCI DSS Level 1 certified payment processor. However, no method of electronic
        transmission is 100% secure.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>Our app integrates with the following categories of third-party services:</p>
      <ul>
        <li><strong>Payment processor</strong> — payment processing</li>
        <li><strong>Authentication, analytics, and push-notification providers</strong> — sign-in, usage analytics, and notifications</li>
        <li><strong>Mapping provider</strong> — location services and map display</li>
        <li><strong>Social sign-in providers</strong> — social authentication</li>
      </ul>
      <p>Each service has its own privacy policy governing data it collects.</p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes
        via in-app notification or email. Continued use of the platform after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For privacy-related questions or to exercise your data rights, reach us through our{" "}
        <a href="/support">Support page</a>, or write to us at:
      </p>
      <p>
        Inspired Technologies Inc.<br />
        180 John St, Toronto, ON M5T 1X5, Canada
      </p>
    </LegalLayout>
  );
}
